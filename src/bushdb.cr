require "digest/md5"

# TODO: Write documentation for `Bushdb`
module Bushdb
  VERSION = "0.1.0"

  # TODO: Put your code here
  alias TupleStrSize32 = Tuple(String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String)
  # ...
  class_property root_store : String = "bush_db"
  class_property mode : Int32 = 511

  # ...
  def set(data : Hash(String, String))
    data.each do |key, value|
      # ...
      md5 : String = Digest::MD5.hexdigest(key)
      dir_path : Path = Path.new(Bushdb.root_store, *TupleStrSize32.from(md5.split(//)))
      # ...
      unless Dir.exists?(p)
        Dir.mkdir_p(dir_path, mode = Bushdb.mode)
      end
      # ...
      file_path : Path = dir_path / "data.txt"
      File.write(file_path, "test 2")
    end
  end
end
