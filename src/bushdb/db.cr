require "digest/md5"
require "json"
require "file_utils"
require "./bush_errors"

# **bushDB** is a fast key-value storage library that provides an
# ordered mapping from string keys to string values.
module BushDB
  # Type for splatting md5 sum.
  alias TupleStrSize32 = Tuple(String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String)

  # A structure for database management - Set, get, update and delete.
  # Example:
  # ```
  # require "bushdb"
  #
  # db = BushDB::DB.new
  # db.set("key name", "Some text") # => nil
  # db.get("key name")              # => "Some text"
  # db.delete("key name")           # => nil
  # db.clear                        # => nil
  # db.napalm                       # => nil
  # ```
  struct DB
    # Root directory for databases.
    # Defaule by = "BushDB"
    property root_store : String = "BushDB"
    # Database name.
    # Defaule by = "store"
    property db_name : String = "store"
    # Directory permissions.
    # The linux-style permission mode can be specified, with a default of 777 (0o777).
    property branch_mode : Int32 = 777
    # File permissions.
    # Default by 0o666 for read-write.
    property leaf_mode : File::Permissions = File::Permissions.new(0o666)

    # Add or update key-value pair(s) to the database.
    # Example:
    # ```
    # require "bushdb"
    #
    # # set key-value
    # db = BushDB::DB.new
    # db.set("key name", "Some text") # => nil
    # ```
    def set(key : String, value : String) : Void
      # Key to md5 sum.
      md5 : String = Digest::MD5.hexdigest(key)
      # The path of the branch to the database cell.
      branch_path : Path = Path.new(@root_store, @db_name, *TupleStrSize32.from(md5.split(//)))
      # If the branch does not exist, need to create it.
      unless Dir.exists?(branch_path)
        Dir.mkdir_p(branch_path, mode = @branch_mode)
      end
      # The path to the database cell.
      leaf_path : Path = branch_path / "leaf.txt"
      # Write key-value to the database.
      unless File.file?(leaf_path)
        # Add new data to a blank leaf.
        File.write(leaf_path, Hash{key => value}.to_json, perm = @leaf_mode)
      else
        # Add new data or update existing data.
        data : Hash(String, String) = Hash(String, String).from_json(File.read(leaf_path))
        data[key] = value
        File.write(leaf_path, data.to_json, perm = @leaf_mode)
      end
    end

    # Get the value by key from the database.
    # Example:
    # ```
    # require "bushdb"
    #
    # # get key-value
    # db = BushDB::DB.new
    # db.set("key name", "Some text")
    # db.get("key name") # => "Some text"
    # ```
    def get(key : String) : (String | Nil)
      # Key to md5 sum.
      md5 : String = Digest::MD5.hexdigest(key)
      # The path to the database cell.
      leaf_path : Path = Path.new(@root_store, @db_name, *TupleStrSize32.from(md5.split(//)), "leaf.txt")
      if File.file?(leaf_path)
        return Hash(String, String).from_json(File.read(leaf_path))[key]?
      end
      nil
    end

    # Delete the key-value from the database.
    # Example:
    # ```
    # require "bushdb"
    #
    # # delete key-value
    # db = BushDB::DB.new
    # db.set("key name", "Some text")
    # db.delete("key name") # => nil
    # db.get("key name")    # => nil
    # ```
    def delete(key : String) : Void
      # Key to md5 sum.
      md5 : String = Digest::MD5.hexdigest(key)
      # The path to the database cell.
      leaf_path : Path = Path.new(@root_store, @db_name, *TupleStrSize32.from(md5.split(//)), "leaf.txt")
      # Delete the key
      if File.file?(leaf_path)
        data : Hash(String, String) = Hash(String, String).from_json(File.read(leaf_path))
        raise ErrorKeyMissing.new(key) if data.delete(key).nil?
        File.write(leaf_path, data.to_json, perm = @leaf_mode)
      else
        raise ErrorKeyMissing.new(key)
      end
    end

    # Completely remove the directory of the database.
    # Example:
    # ```
    # require "bushdb"
    #
    # # remove directory of database
    # db = BushDB::DB.new
    # db.clear # => nil
    # ```
    def clear : Nil
      db_path : Path = Path.new(@root_store, @db_name)
      return FileUtils.rm_rf(db_path) if Dir.exists?(db_path)
      nil
    end

    # Delete the root directory.
    # Attention - Be careful, this destroy all databases.
    # The main purpose is tests.
    # Example:
    # ```
    # require "bushdb"
    #
    # # delete the root directory
    # db = BushDB::DB.new
    # db.napalm # => nil
    # ```
    def napalm : Nil
      root_store_path : Path = Path.new(@root_store)
      return FileUtils.rm_rf(root_store_path) if Dir.exists?(root_store_path)
      nil
    end
  end
end
