require "digest/md5"

# bushDB is a fast key-value storage library that provides an ordered mapping from string keys to string values.
# The library uses fractal-tree addressing.
# The maximum capacity of the database 16**32=340282366920938463463374607431768211456 cells,
# every cell can store one or more keys.
# The value of any key can be obtained in 32 steps, thereby achieving high performance.
module Bushdb
  VERSION = "0.1.0"

  # For splatting md5 sum.
  alias TupleStrSize32 = Tuple(String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String)

  # ...
  struct Store
    # Root directory for databases.
    property root_dir : String = "BushDB"
    # The name of the directory for the database.
    property db_name : String = "store"
    # Directory permissions.
    # The linux-style permission mode can be specified, with a default of 777 (0o777).
    property dir_mode : Int32 = 777
    # File permissions.
    # Default by 0o666 for read-write.
    property file_mode : Int32 = 0o666

    # Add key-value pair(s) to the database.
    def set(data : Hash(String, String))
      data.each do |key, value|
        # ...
        md5 : String = Digest::MD5.hexdigest(key)
        dir_path : Path = Path.new(@root_dir, *TupleStrSize32.from(md5.split(//)))
        # ...
        unless Dir.exists?(p)
          Dir.mkdir_p(dir_path, mode = @dir_mode)
        end
        # ...
        file_path : Path = dir_path / "data.txt"
        File.write(file_path, "test 2")
      end
    end
  end
end
