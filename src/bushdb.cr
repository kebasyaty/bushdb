require "digest/md5"
require "json"
require "file_utils"

# bushDB is a fast key-value storage library that provides an ordered mapping from string keys to string values.
# The library uses fractal-tree addressing.
# The maximum size of the database is 16**32=340282366920938463463374607431768211456 keys.
# The value of any key can be obtained in 32 steps, thereby achieving high performance.
module Bushdb
  VERSION = "0.1.0"

  # Type for splatting md5 sum.
  alias TupleStrSize32 = Tuple(String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String)

  # A structure for database management - Set, get, update and delete.
  struct Store
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

    # Add key-value pair(s) to the database.
    def set(key : String, value : String) : Void
      # Key to md5 sum.
      md5 : String = Digest::MD5.hexdigest(key)
      # The path of the branch to the database cell.
      branch_path : Path = Path.new(@root_store, @db_name, *TupleStrSize32.from(md5.split(//)))
      # If the branch does not exist, need to create it.
      unless Dir.exists?(branch_path)
        Dir.mkdir_p(branch_path, mode = @branch_mode)
      end
      # Write key-value to the database.
      leaf_path : Path = branch_path / "leaf.txt"
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
    def get(key : String) : (String | Nil)
      # Key to md5 sum.
      md5 : String = Digest::MD5.hexdigest(key)
      leaf_path : Path = Path.new(@root_store, @db_name, *TupleStrSize32.from(md5.split(//)), "leaf.txt")
      if File.file?(leaf_path)
        return Hash(String, String).from_json(File.read(leaf_path))[key]?
      end
      nil
    end

    # Remove all the keys.
    def clear : Nil
      db_path : Path = Path.new(@root_store, @db_name)
      FileUtils.rm_rf(db_path)
    end
  end
end
