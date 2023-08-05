crystal_doc_search_index_callback({"repository_name":"bushdb","body":"[![Logo](https://github.com/kebasyaty/bushdb/raw/v0/logo/logo.svg \"Logo\")](https://github.com/kebasyaty/bushdb \"Logo\")\r\n\r\n# bushDB\r\n\r\n**bushDB** is a fast key-value storage library that provides an ordered mapping from string keys to string values.\r\nThe library uses fractal-tree addressing.\r\nThe maximum size of the database is 16\\*\\*32=340282366920938463463374607431768211456 branches,\r\neach branch can store one or more keys.\r\nThe value of any key can be obtained in 32 steps, thereby achieving high performance.\r\nThere is no need to iterate through all the keys in search of the desired value.\r\n\r\n[![CI](https://github.com/kebasyaty/bushdb/workflows/CI/badge.svg)](https://github.com/kebasyaty/bushdb/actions)\r\n[![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://kebasyaty.github.io/bushdb/)\r\n[![Crystal](https://img.shields.io/badge/crystal-v1.9%2B-red)](https://crystal-lang.org/)\r\n[![GitHub license](https://badgen.net/github/license/kebasyaty/bushdb)](https://github.com/kebasyaty/bushdb/blob/v0/LICENSE)\r\n\r\n## Installation\r\n\r\n1. Add the dependency to your `shard.yml`:\r\n\r\n   ```yaml\r\n   dependencies:\r\n     bushdb:\r\n       github: kebasyaty/bushdb\r\n   ```\r\n\r\n2. Run `shards install`\r\n\r\n## Usage\r\n\r\n```crystal\r\nrequire \"bushdb\"\r\n\r\n# Create DB\r\ndb : BushDB::DB = BushDB::DB.new\r\n\r\n# Set, get, delete\r\ndb.set(\"key name\", \"Some text\")\r\ndb.get(\"key name\") # => \"Some text\"\r\ndb.delete(\"key name\")\r\ndb.get(\"key name\") # => nil\r\n\r\n# Delete the database directory with all the keys in it.\r\ndb.clear\r\n# or\r\ndb.clear? # => true\r\n\r\n# Delete the root directory with all databases in it.\r\ndb.napalm\r\n# or\r\ndb.napalm? # => true\r\n```\r\n\r\n## License\r\n\r\n**This project is licensed under the** [MIT](https://github.com/kebasyaty/bushdb/blob/v0/LICENSE \"MIT\").\r\n\r\n## Changelog\r\n\r\n[View the change history.](https://github.com/kebasyaty/bushdb/blob/v0/CHANGELOG.md \"View the change history.\")\r\n\r\n## Contributing\r\n\r\n1. Fork it (<https://github.com/kebasyaty/bushdb/fork>)\r\n2. Create your feature branch (`git checkout -b my-new-feature`)\r\n3. Commit your changes (`git commit -am 'Add some feature'`)\r\n4. Push to the branch (`git push origin my-new-feature`)\r\n5. Create a new Pull Request\r\n\r\n## Contributors\r\n\r\n- [kebasyaty](https://github.com/kebasyaty) Gennady Kostyunin - creator and maintainer\r\n","program":{"html_id":"bushdb/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"bushdb","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"bushdb/BushDB","path":"BushDB.html","kind":"module","full_name":"BushDB","name":"BushDB","abstract":false,"locations":[{"filename":"src\\bushdb.cr","line_number":9,"url":null},{"filename":"src\\bushdb\\db.cr","line_number":6,"url":null},{"filename":"src\\bushdb\\errors.cr","line_number":2,"url":null},{"filename":"src\\bushdb\\globals.cr","line_number":2,"url":null}],"repository_name":"bushdb","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.4.1\""}],"doc":"**bushDB** is a fast key-value storage library that provides an ordered mapping from string keys to string values.\r\nThe library uses fractal-tree addressing.\r\nThe maximum size of the database is 16\\*\\*32=340282366920938463463374607431768211456 branches,\r\neach branch can store one or more keys.\r\nThe value of any key can be obtained in 32 steps, thereby achieving high performance.\r\nThere is no need to iterate through all the keys in search of the desired value.\r","summary":"<p><strong>bushDB</strong> is a fast key-value storage library that provides an ordered mapping from string keys to string values.</p>","types":[{"html_id":"bushdb/BushDB/DB","path":"BushDB/DB.html","kind":"struct","full_name":"BushDB::DB","name":"DB","abstract":false,"superclass":{"html_id":"bushdb/Struct","kind":"struct","full_name":"Struct","name":"Struct"},"ancestors":[{"html_id":"bushdb/Struct","kind":"struct","full_name":"Struct","name":"Struct"},{"html_id":"bushdb/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"bushdb/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src\\bushdb\\db.cr","line_number":21,"url":null}],"repository_name":"bushdb","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"bushdb/BushDB","kind":"module","full_name":"BushDB","name":"BushDB"},"doc":"A structure for database management - Set, get, update, delete, clear and napalm.\r\n\r\nExample:\r\n```\r\nrequire \"bushdb\"\r\n\r\ndb = BushDB::DB.new\r\ndb.set(\"key name\", \"Some text\")\r\ndb.get(\"key name\") # => \"Some text\"\r\ndb.delete(\"key name\")\r\ndb.clear\r\ndb.napalm\r\n```\r\n\r","summary":"<p>A structure for database management - Set, get, update, delete, clear and napalm.</p>","constructors":[{"html_id":"new-class-method","name":"new","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":21,"url":null},"def":{"name":"new","visibility":"Public","body":"x = allocate\nif x.responds_to?(:finalize)\n  ::GC.add_finalizer(x)\nend\nx\n"}}],"instance_methods":[{"html_id":"branch_mode:Int32-instance-method","name":"branch_mode","doc":"Directory permissions.\r\nThe linux-style permission mode can be specified, with a default of 777 (0o777).\r","summary":"<p>Directory permissions.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":30,"url":null},"def":{"name":"branch_mode","return_type":"Int32","visibility":"Public","body":"@branch_mode"}},{"html_id":"branch_mode=(branch_mode:Int32)-instance-method","name":"branch_mode=","doc":"Directory permissions.\r\nThe linux-style permission mode can be specified, with a default of 777 (0o777).\r","summary":"<p>Directory permissions.</p>","abstract":false,"args":[{"name":"branch_mode","external_name":"branch_mode","restriction":"Int32"}],"args_string":"(branch_mode : Int32)","args_html":"(branch_mode : Int32)","location":{"filename":"src\\bushdb\\db.cr","line_number":30,"url":null},"def":{"name":"branch_mode=","args":[{"name":"branch_mode","external_name":"branch_mode","restriction":"Int32"}],"visibility":"Public","body":"@branch_mode = branch_mode"}},{"html_id":"clear:Void-instance-method","name":"clear","doc":"Remove directory of database.\r\nIf the directory is missing, an #ErrorDirMissing exception is raised.\r\nWARNING: Be careful, this will remove all keys.\r\n\r\nExample:\r\n```\r\nrequire \"bushdb\"\r\n\r\ndb = BushDB::DB.new\r\ndb.clear\r\ndb.clear # => ErrorDirMissing\r\n```\r\n\r","summary":"<p>Remove directory of database.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":169,"url":null},"def":{"name":"clear","return_type":"Void","visibility":"Public","body":"db_path : Path = Path.new(@root_store, @db_name)\nif Dir.exists?(db_path)\n  return FileUtils.rm_rf(db_path)\nend\nraise(BushDB::ErrorDirMissing.new(@db_name))\n"}},{"html_id":"clear?:Bool-instance-method","name":"clear?","doc":"Remove directory of database.\r\nReturns false if the directory is missing.\r\nWARNING: Be careful, this will remove all keys.\r\n\r\nExample:\r\n```\r\nrequire \"bushdb\"\r\n\r\ndb = BushDB::DB.new\r\ndb.clear? # => true\r\ndb.clear? # => false\r\n```\r\n\r","summary":"<p>Remove directory of database.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":188,"url":null},"def":{"name":"clear?","return_type":"Bool","visibility":"Public","body":"db_path : Path = Path.new(@root_store, @db_name)\nif Dir.exists?(db_path)\n  FileUtils.rm_rf(db_path)\n  return true\nend\nfalse\n"}},{"html_id":"db_name:String-instance-method","name":"db_name","doc":"Database name.\r\nDefaule by = \"store\"\r","summary":"<p>Database name.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":27,"url":null},"def":{"name":"db_name","return_type":"String","visibility":"Public","body":"@db_name"}},{"html_id":"db_name=(db_name:String)-instance-method","name":"db_name=","doc":"Database name.\r\nDefaule by = \"store\"\r","summary":"<p>Database name.</p>","abstract":false,"args":[{"name":"db_name","external_name":"db_name","restriction":"String"}],"args_string":"(db_name : String)","args_html":"(db_name : String)","location":{"filename":"src\\bushdb\\db.cr","line_number":27,"url":null},"def":{"name":"db_name=","args":[{"name":"db_name","external_name":"db_name","restriction":"String"}],"visibility":"Public","body":"@db_name = db_name"}},{"html_id":"delete(key:String):Void-instance-method","name":"delete","doc":"Delete the key-value from the database.\r\nIf the key is missing, an #ErrorKeyMissing exception is raised.\r\n\r\nExample:\r\n```\r\nrequire \"bushdb\"\r\n\r\ndb = BushDB::DB.new\r\ndb.set(\"key name\", \"Some text\")\r\ndb.delete(\"key name\")\r\ndb.get(\"key name\")    # => nil\r\ndb.delete(\"key name\") # => ErrorKeyMissing\r\n```\r\n\r","summary":"<p>Delete the key-value from the database.</p>","abstract":false,"args":[{"name":"key","external_name":"key","restriction":"String"}],"args_string":"(key : String) : Void","args_html":"(key : String) : Void","location":{"filename":"src\\bushdb\\db.cr","line_number":108,"url":null},"def":{"name":"delete","args":[{"name":"key","external_name":"key","restriction":"String"}],"return_type":"Void","visibility":"Public","body":"md5_str : String = Digest::MD5.hexdigest(key)\nmd5_tuple : BushDB::TupleStrSize32 = BushDB::TupleStrSize32.from(md5_str.split(%r()))\nleaf_path : Path = Path.new(@root_store, @db_name, *md5_tuple, \"leaf.txt\")\nif File.file?(leaf_path)\n  data : Hash(String, String) = Hash(String, String).from_json(File.read(leaf_path))\n  if data.delete(key).nil?\n    raise(BushDB::ErrorKeyMissing.new(key))\n  end\n  File.write(leaf_path, data.to_json, perm = @leaf_mode)\nelse\n  raise(BushDB::ErrorKeyMissing.new(key))\nend\n"}},{"html_id":"delete?(key:String):Bool-instance-method","name":"delete?","doc":"Delete the key-value from the database.\r\nReturns false if the key is missing.\r\n\r\nExample:\r\n```\r\nrequire \"bushdb\"\r\n\r\ndb = BushDB::DB.new\r\ndb.set(\"key name\", \"Some text\")\r\ndb.delete?(\"key name\") # => true\r\ndb.get(\"key name\")     # => nil\r\ndb.delete?(\"key name\") # => false\r\n```\r\n\r","summary":"<p>Delete the key-value from the database.</p>","abstract":false,"args":[{"name":"key","external_name":"key","restriction":"String"}],"args_string":"(key : String) : Bool","args_html":"(key : String) : Bool","location":{"filename":"src\\bushdb\\db.cr","line_number":139,"url":null},"def":{"name":"delete?","args":[{"name":"key","external_name":"key","restriction":"String"}],"return_type":"Bool","visibility":"Public","body":"md5_str : String = Digest::MD5.hexdigest(key)\nmd5_tuple : BushDB::TupleStrSize32 = BushDB::TupleStrSize32.from(md5_str.split(%r()))\nleaf_path : Path = Path.new(@root_store, @db_name, *md5_tuple, \"leaf.txt\")\nif File.file?(leaf_path)\n  data : Hash(String, String) = Hash(String, String).from_json(File.read(leaf_path))\n  if data.delete(key).nil?\n    return false\n  end\n  File.write(leaf_path, data.to_json, perm = @leaf_mode)\n  return true\nend\nfalse\n"}},{"html_id":"get(key:String):String|Nil-instance-method","name":"get","doc":"Get the value by key from the database.\r\n\r\nExample:\r\n```\r\nrequire \"bushdb\"\r\n\r\ndb = BushDB::DB.new\r\ndb.set(\"key name\", \"Some text\")\r\ndb.get(\"key name\") # => \"Some text\"\r\n```\r\n\r","summary":"<p>Get the value by key from the database.</p>","abstract":false,"args":[{"name":"key","external_name":"key","restriction":"String"}],"args_string":"(key : String) : String | Nil","args_html":"(key : String) : String | Nil","location":{"filename":"src\\bushdb\\db.cr","line_number":81,"url":null},"def":{"name":"get","args":[{"name":"key","external_name":"key","restriction":"String"}],"return_type":"String | Nil","visibility":"Public","body":"md5_str : String = Digest::MD5.hexdigest(key)\nmd5_tuple : BushDB::TupleStrSize32 = BushDB::TupleStrSize32.from(md5_str.split(%r()))\nleaf_path : Path = Path.new(@root_store, @db_name, *md5_tuple, \"leaf.txt\")\nif File.file?(leaf_path)\n  return (Hash(String, String).from_json(File.read(leaf_path)))[key]?\nend\nnil\n"}},{"html_id":"initialize-instance-method","name":"initialize","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":21,"url":null},"def":{"name":"initialize","visibility":"Public","body":""}},{"html_id":"leaf_mode:File::Permissions-instance-method","name":"leaf_mode","doc":"File permissions.\r\nDefault by 0o666 for read-write.\r","summary":"<p>File permissions.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":33,"url":null},"def":{"name":"leaf_mode","return_type":"File::Permissions","visibility":"Public","body":"@leaf_mode"}},{"html_id":"leaf_mode=(leaf_mode:File::Permissions)-instance-method","name":"leaf_mode=","doc":"File permissions.\r\nDefault by 0o666 for read-write.\r","summary":"<p>File permissions.</p>","abstract":false,"args":[{"name":"leaf_mode","external_name":"leaf_mode","restriction":"File::Permissions"}],"args_string":"(leaf_mode : File::Permissions)","args_html":"(leaf_mode : File::Permissions)","location":{"filename":"src\\bushdb\\db.cr","line_number":33,"url":null},"def":{"name":"leaf_mode=","args":[{"name":"leaf_mode","external_name":"leaf_mode","restriction":"File::Permissions"}],"visibility":"Public","body":"@leaf_mode = leaf_mode"}},{"html_id":"napalm:Void-instance-method","name":"napalm","doc":"Delete the root directory.\r\nIf the directory is missing, an #ErrorDirMissing exception is raised.\r\nWARNING: Be careful, this will remove all databases.\r\nNOTE: The main purpose is tests.\r\n\r\nExample:\r\n```\r\nrequire \"bushdb\"\r\n\r\ndb = BushDB::DB.new\r\ndb.napalm\r\ndb.napalm # => ErrorDirMissing\r\n```\r\n\r","summary":"<p>Delete the root directory.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":211,"url":null},"def":{"name":"napalm","return_type":"Void","visibility":"Public","body":"if Dir.exists?(@root_store)\n  return FileUtils.rm_rf(@root_store)\nend\nraise(BushDB::ErrorDirMissing.new(@root_store))\n"}},{"html_id":"napalm?:Bool-instance-method","name":"napalm?","doc":"Delete the root directory.\r\nReturns false if the root directory is missing.\r\nWARNING: Be careful, this will remove all databases.\r\nNOTE: The main purpose is tests.\r\n\r\nExample:\r\n```\r\nrequire \"bushdb\"\r\n\r\ndb = BushDB::DB.new\r\ndb.napalm? # => true\r\ndb.napalm? # => false\r\n```\r\n\r","summary":"<p>Delete the root directory.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":230,"url":null},"def":{"name":"napalm?","return_type":"Bool","visibility":"Public","body":"if Dir.exists?(@root_store)\n  FileUtils.rm_rf(@root_store)\n  return true\nend\nfalse\n"}},{"html_id":"root_store:Path-instance-method","name":"root_store","doc":"Root directory for databases.\r\nDefaule by = \"BushDB\"\r","summary":"<p>Root directory for databases.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":24,"url":null},"def":{"name":"root_store","return_type":"Path","visibility":"Public","body":"@root_store"}},{"html_id":"root_store=(root_store:Path)-instance-method","name":"root_store=","doc":"Root directory for databases.\r\nDefaule by = \"BushDB\"\r","summary":"<p>Root directory for databases.</p>","abstract":false,"args":[{"name":"root_store","external_name":"root_store","restriction":"Path"}],"args_string":"(root_store : Path)","args_html":"(root_store : Path)","location":{"filename":"src\\bushdb\\db.cr","line_number":24,"url":null},"def":{"name":"root_store=","args":[{"name":"root_store","external_name":"root_store","restriction":"Path"}],"visibility":"Public","body":"@root_store = root_store"}},{"html_id":"set(key:String,value:String):Void-instance-method","name":"set","doc":"Add or update key-value pair(s) to the database.\r\n\r\nExample:\r\n```\r\nrequire \"bushdb\"\r\n\r\ndb = BushDB::DB.new\r\ndb.set(\"key name\", \"Some text\")\r\n```\r\n\r","summary":"<p>Add or update key-value pair(s) to the database.</p>","abstract":false,"args":[{"name":"key","external_name":"key","restriction":"String"},{"name":"value","external_name":"value","restriction":"String"}],"args_string":"(key : String, value : String) : Void","args_html":"(key : String, value : String) : Void","location":{"filename":"src\\bushdb\\db.cr","line_number":45,"url":null},"def":{"name":"set","args":[{"name":"key","external_name":"key","restriction":"String"},{"name":"value","external_name":"value","restriction":"String"}],"return_type":"Void","visibility":"Public","body":"md5_str : String = Digest::MD5.hexdigest(key)\nmd5_tuple : BushDB::TupleStrSize32 = BushDB::TupleStrSize32.from(md5_str.split(%r()))\nbranch_path : Path = Path.new(@root_store, @db_name, *md5_tuple)\nif Dir.exists?(branch_path)\nelse\n  Dir.mkdir_p(branch_path, mode = @branch_mode)\nend\nleaf_path : Path = branch_path / \"leaf.txt\"\nif File.file?(leaf_path)\n  data : Hash(String, String) = Hash(String, String).from_json(File.read(leaf_path))\n  data[key] = value\n  File.write(leaf_path, data.to_json, perm = @leaf_mode)\nelse\n  File.write(leaf_path, Hash {key => value}.to_json, perm = @leaf_mode)\nend\n"}}]},{"html_id":"bushdb/BushDB/ErrorDirMissing","path":"BushDB/ErrorDirMissing.html","kind":"class","full_name":"BushDB::ErrorDirMissing","name":"ErrorDirMissing","abstract":false,"superclass":{"html_id":"bushdb/Exception","kind":"class","full_name":"Exception","name":"Exception"},"ancestors":[{"html_id":"bushdb/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"bushdb/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"bushdb/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src\\bushdb\\errors.cr","line_number":11,"url":null}],"repository_name":"bushdb","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"bushdb/BushDB","kind":"module","full_name":"BushDB","name":"BushDB"},"doc":"Error of missing directory.\r","summary":"<p>Error of missing directory.</p>","constructors":[{"html_id":"new(directory:String|Path,cause:Exception|Nil=nil)-class-method","name":"new","abstract":false,"args":[{"name":"directory","external_name":"directory","restriction":"String | Path"},{"name":"cause","default_value":"nil","external_name":"cause","restriction":"Exception | Nil"}],"args_string":"(directory : String | Path, cause : Exception | Nil = nil)","args_html":"(directory : String | Path, cause : Exception | Nil = <span class=\"n\">nil</span>)","location":{"filename":"src\\bushdb\\errors.cr","line_number":12,"url":null},"def":{"name":"new","args":[{"name":"directory","external_name":"directory","restriction":"String | Path"},{"name":"cause","default_value":"nil","external_name":"cause","restriction":"Exception | Nil"}],"visibility":"Public","body":"_ = allocate\n_.initialize(directory, cause)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}]},{"html_id":"bushdb/BushDB/ErrorKeyMissing","path":"BushDB/ErrorKeyMissing.html","kind":"class","full_name":"BushDB::ErrorKeyMissing","name":"ErrorKeyMissing","abstract":false,"superclass":{"html_id":"bushdb/Exception","kind":"class","full_name":"Exception","name":"Exception"},"ancestors":[{"html_id":"bushdb/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"bushdb/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"bushdb/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src\\bushdb\\errors.cr","line_number":4,"url":null}],"repository_name":"bushdb","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"bushdb/BushDB","kind":"module","full_name":"BushDB","name":"BushDB"},"doc":"Error of missing key.\r","summary":"<p>Error of missing key.</p>","constructors":[{"html_id":"new(key:String,cause:Exception|Nil=nil)-class-method","name":"new","abstract":false,"args":[{"name":"key","external_name":"key","restriction":"String"},{"name":"cause","default_value":"nil","external_name":"cause","restriction":"Exception | Nil"}],"args_string":"(key : String, cause : Exception | Nil = nil)","args_html":"(key : String, cause : Exception | Nil = <span class=\"n\">nil</span>)","location":{"filename":"src\\bushdb\\errors.cr","line_number":5,"url":null},"def":{"name":"new","args":[{"name":"key","external_name":"key","restriction":"String"},{"name":"cause","default_value":"nil","external_name":"cause","restriction":"Exception | Nil"}],"visibility":"Public","body":"_ = allocate\n_.initialize(key, cause)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}]},{"html_id":"bushdb/BushDB/TupleStrSize32","path":"BushDB/TupleStrSize32.html","kind":"alias","full_name":"BushDB::TupleStrSize32","name":"TupleStrSize32","abstract":false,"locations":[{"filename":"src\\bushdb\\globals.cr","line_number":4,"url":null}],"repository_name":"bushdb","program":false,"enum":false,"alias":true,"aliased":"Tuple(String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String)","aliased_html":"{String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String}","const":false,"namespace":{"html_id":"bushdb/BushDB","kind":"module","full_name":"BushDB","name":"BushDB"},"doc":"Type for splatting md5 sum.\r","summary":"<p>Type for splatting md5 sum.</p>"}]}]}})