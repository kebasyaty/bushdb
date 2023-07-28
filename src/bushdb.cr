require "digest/md5"

# bushDB is a fast key-value storage library that provides an ordered mapping from string keys to string values.
# The library uses fractal-tree addressing.
# The maximum capacity of the database 16**32=340282366920938463463374607431768211456 cells,
# every cell can store one or more keys.
# The value of any key can be obtained in 32 steps, thereby achieving high performance.
module Bushdb
  VERSION = "0.1.0"

  # Type for splatting md5 sum.
  alias TupleStrSize32 = Tuple(String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String)

  # ...
  struct Store
    # Root directory for databases.
    property root_store : String = "BushDB"
    # Root directory for database.
    property root_db : String = "store"
    # Directory permissions.
    # The linux-style permission mode can be specified, with a default of 777 (0o777).
    property branch_mode : Int32 = 777
    # File permissions.
    # Default by 0o666 for read-write.
    property leaf_mode : Int32 = 0o666

    # Add key-value pair(s) to the database.
    def set(data : Hash(String, String))
      data.each do |key, value|
        # Key to md5 sum.
        md5 : String = Digest::MD5.hexdigest(key)
        # The path of the branch to the database cell.
        branch_path : Path = Path.new(@root_store, *TupleStrSize32.from(md5.split(//)))
        # If the branch does not exist, need to create it.
        unless Dir.exists?(branch_path)
          Dir.mkdir_p(branch_path, mode = @branch_mode)
        end
        # ...
        leaf_path : Path = branch_path / "leaf.txt"
        File.write(leaf_path, "test 2")
      end
    end
  end
end
