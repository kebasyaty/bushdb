require "digest/md5"
require "json"
require "file_utils"
require "./errors"

module BushDB
  # A structure for database management - Set, get, has, update, delete, clear and napalm.
  #
  # Example:
  # ```
  # require "bushdb"
  #
  # db = BushDB::DB.new
  # db.set("key name", "Some text")
  # db.get("key name") # => "Some text"
  # db.has("key name") # => true
  # db.delete("key name")
  # db.clear
  # db.napalm
  # ```
  #
  struct DB
    # Root directory for databases.
    # Defaule by = "BushDB"
    property root_store : Path = Path.new("BushDB")
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
    #
    # Example:
    # ```
    # require "bushdb"
    #
    # db = BushDB::DB.new
    # db.set("key name", "Some text")
    # ```
    #
    def set(key : String, value : String)
      # Key to md5 sum.
      md5_str : String = Digest::MD5.hexdigest(key)
      # Convert md5 sum to path.
      md5_path : String = md5_str.split(//).join("/")
      # The path of the branch to the database cell.
      branch_path : Path = Path.new(@root_store, @db_name, md5_path)
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
    #
    # Example:
    # ```
    # require "bushdb"
    #
    # db = BushDB::DB.new
    # db.set("key name", "Some text")
    # db.get("key name")    # => "Some text"
    # db.get("key missing") # => nil
    # ```
    #
    def get(key : String) : String | Nil
      # Key to md5 sum.
      md5_str : String = Digest::MD5.hexdigest(key)
      # Convert md5 sum to path.
      md5_path : String = md5_str.split(//).join("/")
      # The path to the database cell.
      leaf_path : Path = Path.new(@root_store, @db_name, md5_path, "leaf.txt")
      if File.file?(leaf_path)
        return Hash(String, String).from_json(File.read(leaf_path))[key]?
      end
      nil
    end

    # Check the presence of a key in the database.
    #
    # Example:
    # ```
    # require "bushdb"
    #
    # db = BushDB::DB.new
    # db.set("key name", "Some text")
    # db.has("key name")    # => true
    # db.has("key missing") # => false
    # ```
    #
    def has(key : String) : Bool
      # Key to md5 sum.
      md5_str : String = Digest::MD5.hexdigest(key)
      # Convert md5 sum to path.
      md5_path : String = md5_str.split(//).join("/")
      # The path to the database cell.
      leaf_path : Path = Path.new(@root_store, @db_name, md5_path, "leaf.txt")
      if File.file?(leaf_path)
        flag : Bool = /"#{key}":/.matches?(File.read(leaf_path))
        return flag
      end
      false
    end

    # Delete the key-value from the database.
    # If the key is missing, an #ErrorKeyMissing exception is raised.
    #
    # Example:
    # ```
    # require "bushdb"
    #
    # db = BushDB::DB.new
    # db.set("key name", "Some text")
    # db.delete("key name")
    # db.get("key name")    # => nil
    # db.delete("key name") # => KeyMissing
    # ```
    #
    def delete(key : String)
      # Key to md5 sum.
      md5_str : String = Digest::MD5.hexdigest(key)
      # Convert md5 sum to path.
      md5_path : String = md5_str.split(//).join("/")
      # The path to the database cell.
      leaf_path : Path = Path.new(@root_store, @db_name, md5_path, "leaf.txt")
      # Delete the key
      if File.file?(leaf_path)
        data : Hash(String, String) = Hash(String, String).from_json(File.read(leaf_path))
        raise BushDB::KeyMissing.new(key) if data.delete(key).nil?
        File.write(leaf_path, data.to_json, perm = @leaf_mode)
      else
        raise BushDB::KeyMissing.new(key)
      end
    end

    # Delete the key-value from the database.
    # Returns false if the key is missing.
    #
    # Example:
    # ```
    # require "bushdb"
    #
    # db = BushDB::DB.new
    # db.set("key name", "Some text")
    # db.delete?("key name") # => true
    # db.get("key name")     # => nil
    # db.delete?("key name") # => false
    # ```
    #
    def delete?(key : String) : Bool
      # Key to md5 sum.
      md5_str : String = Digest::MD5.hexdigest(key)
      # Convert md5 sum to path.
      md5_path : String = md5_str.split(//).join("/")
      # The path to the database cell.
      leaf_path : Path = Path.new(@root_store, @db_name, md5_path, "leaf.txt")
      # Delete the key
      if File.file?(leaf_path)
        data : Hash(String, String) = Hash(String, String).from_json(File.read(leaf_path))
        return false if data.delete(key).nil?
        File.write(leaf_path, data.to_json, perm = @leaf_mode)
        return true
      end
      false
    end

    # Remove directory of database.
    # If the directory is missing, an #ErrorDirMissing exception is raised.
    # WARNING: Be careful, this will remove all keys.
    #
    # Example:
    # ```
    # require "bushdb"
    #
    # db = BushDB::DB.new
    # db.clear
    # db.clear # => DirMissing
    # ```
    #
    def clear
      db_path : Path = @root_store / @db_name
      return FileUtils.rm_rf(db_path) if Dir.exists?(db_path)
      raise BushDB::DirMissing.new(@db_name)
    end

    # Remove directory of database.
    # Returns false if the directory is missing.
    # WARNING: Be careful, this will remove all keys.
    #
    # Example:
    # ```
    # require "bushdb"
    #
    # db = BushDB::DB.new
    # db.clear? # => true
    # db.clear? # => false
    # ```
    #
    def clear? : Bool
      db_path : Path = @root_store / @db_name
      if Dir.exists?(db_path)
        FileUtils.rm_rf(db_path)
        return true
      end
      false
    end

    # Delete the root directory.
    # If the directory is missing, an #ErrorDirMissing exception is raised.
    # WARNING: Be careful, this will remove all databases.
    # NOTE: The main purpose is tests.
    #
    # Example:
    # ```
    # require "bushdb"
    #
    # db = BushDB::DB.new
    # db.napalm
    # db.napalm # => DirMissing
    # ```
    #
    def napalm
      return FileUtils.rm_rf(@root_store) if Dir.exists?(@root_store)
      raise BushDB::DirMissing.new(@root_store)
    end

    # Delete the root directory.
    # Returns false if the root directory is missing.
    # WARNING: Be careful, this will remove all databases.
    # NOTE: The main purpose is tests.
    #
    # Example:
    # ```
    # require "bushdb"
    #
    # db = BushDB::DB.new
    # db.napalm? # => true
    # db.napalm? # => false
    # ```
    #
    def napalm? : Bool
      if Dir.exists?(@root_store)
        FileUtils.rm_rf(@root_store)
        return true
      end
      false
    end
  end
end
