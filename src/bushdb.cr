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
    # Support for atomic operations.
    # If the key exists, it will be ignored.
    def set(data : Hash(String, String)) : UInt64
      count : UInt64 = 0
      data.each do |key, value|
        # Key to md5 sum.
        md5 : String = Digest::MD5.hexdigest(key)
        # The path of the branch to the database cell.
        branch_path : Path = Path.new(@root_store, @db_name, *TupleStrSize32.from(md5.split(//)))
        # If the branch does not exist, need to create it.
        unless Dir.exists?(branch_path)
          Dir.mkdir_p(branch_path, mode = @branch_mode)
        end
        # Write key-value to the database.
        # If the key exists, it will be ignored.
        leaf_path : Path = branch_path / "leaf.txt"
        unless File.file?(leaf_path)
          File.write(leaf_path, Tuple.new(key, value).to_json, perm = @leaf_mode)
          count += 1_u64
        end
      end
      count
    end

    # Get the value by key from the database.
    def get(key : String) : (String | Nil)
      # Key to md5 sum.
      md5 : String = Digest::MD5.hexdigest(key)
      leaf_path : Path = Path.new(@root_store, @db_name, *TupleStrSize32.from(md5.split(//)), "leaf.txt")
      if File.file?(leaf_path)
        return Tuple(String, String).from_json(File.read(leaf_path))[1]
      end
      nil
    end

    # Update key-value pair(s) in the database.
    # Support for atomic operations.
    def update(data : Hash(String, String)) : Void
      data.each do |key, value|
        # Key to md5 sum.
        md5 : String = Digest::MD5.hexdigest(key)
        # The path to the data file.
        leaf_path : Path = Path.new(@root_store, @db_name, *TupleStrSize32.from(md5.split(//)), "leaf.txt")
        # Write key-value to the database.
        if File.file?(leaf_path)
          File.write(leaf_path, Tuple.new(key, value).to_json, perm = @leaf_mode)
        else
          # If there is no data file, raise an exception.
          raise Exception.new("Key #{key} is missing.")
        end
      end
    end

    # Remove all the keys.
    def clear : Nil
      db_path : Path = Path.new(@root_store, @db_name)
      FileUtils.rm_rf(db_path)
    end
  end
end
