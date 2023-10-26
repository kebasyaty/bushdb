crystal_doc_search_index_callback({"repository_name":"bushdb","body":"[![Logo](https://github.com/kebasyaty/bushdb/raw/v0/logo/logo.svg \"Logo\")](https://github.com/kebasyaty/bushdb \"Logo\")\r\n\r\n# bushDB\r\n\r\n**bushDB** is a fast key-value storage library that provides an ordered mapping from string keys to string values.\r\n<br>\r\nThe library uses fractal-tree addressing.\r\n<br>\r\nThe maximum size of the database is 16\\*\\*32=340282366920938463463374607431768211456 branches,\r\neach branch can store one or more keys.\r\n<br>\r\nThe value of any key can be obtained in 32 steps, thereby achieving high performance.\r\n<br>\r\nThere is no need to iterate through all the keys in search of the desired value.\r\n\r\n[![CI](https://github.com/kebasyaty/bushdb/workflows/CI/badge.svg)](https://github.com/kebasyaty/bushdb/actions)\r\n[![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://kebasyaty.github.io/bushdb/)\r\n[![Crystal](https://img.shields.io/badge/crystal-v1.9%2B-red)](https://crystal-lang.org/)\r\n[![GitHub license](https://badgen.net/github/license/kebasyaty/bushdb)](https://github.com/kebasyaty/bushdb/blob/v0/LICENSE)\r\n\r\n## Installation\r\n\r\n1. Add the dependency to your `shard.yml`:\r\n\r\n   ```yaml\r\n   dependencies:\r\n     bushdb:\r\n       github: kebasyaty/bushdb\r\n       version: ~> 0.6.4\r\n   ```\r\n\r\n2. Run `shards install`\r\n\r\n## Usage\r\n\r\n```crystal\r\nrequire \"bushdb\"\r\n\r\n# Create DB\r\ndb : BushDB::DB = BushDB::DB.new\r\n\r\n# Set, get, delete\r\ndb.set(\"key name\", \"Some text\")\r\ndb.get(\"key name\") # => \"Some text\"\r\ndb.has(\"key name\") # => true\r\n#\r\ndb.delete(\"key name\")\r\n# or\r\ndb.delete?(\"key name\") # => true\r\n#\r\n# If the key has been deleted.\r\ndb.get(\"key name\") # => nil\r\n\r\n# Delete the database directory with all the keys in it.\r\ndb.clear\r\n# or\r\ndb.clear? # => true\r\n\r\n# Delete the root directory with all databases in it.\r\ndb.napalm\r\n# or\r\ndb.napalm? # => true\r\n```\r\n\r\n## License\r\n\r\n**This project is licensed under the** [MIT](https://github.com/kebasyaty/bushdb/blob/v0/LICENSE \"MIT\").\r\n\r\n## Changelog\r\n\r\n[View the change history.](https://github.com/kebasyaty/bushdb/blob/v0/CHANGELOG.md \"View the change history.\")\r\n\r\n## Contributing\r\n\r\n1. Fork it (<https://github.com/kebasyaty/bushdb/fork>)\r\n2. Create your feature branch (`git checkout -b my-new-feature`)\r\n3. Commit your changes (`git commit -am 'Add some feature'`)\r\n4. Push to the branch (`git push origin my-new-feature`)\r\n5. Create a new Pull Request\r\n\r\n## Contributors\r\n\r\n- [kebasyaty](https://github.com/kebasyaty) Gennady Kostyunin - creator and maintainer\r\n","program":{"html_id":"bushdb/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"bushdb","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"bushdb/BushDB","path":"BushDB.html","kind":"module","full_name":"BushDB","name":"BushDB","abstract":false,"locations":[{"filename":"src\\bushdb.cr","line_number":9,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb.cr#L9"},{"filename":"src\\bushdb\\db.cr","line_number":6,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L6"},{"filename":"src\\bushdb\\errors.cr","line_number":2,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\errors.cr#L2"}],"repository_name":"bushdb","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.6.4\""}],"doc":"**bushDB** is a fast key-value storage library that provides an ordered mapping from string keys to string values.\nThe library uses fractal-tree addressing.\nThe maximum size of the database is 16\\*\\*32=340282366920938463463374607431768211456 branches,\neach branch can store one or more keys.\nThe value of any key can be obtained in 32 steps, thereby achieving high performance.\nThere is no need to iterate through all the keys in search of the desired value.","summary":"<p><strong>bushDB</strong> is a fast key-value storage library that provides an ordered mapping from string keys to string values.</p>","types":[{"html_id":"bushdb/BushDB/DB","path":"BushDB/DB.html","kind":"struct","full_name":"BushDB::DB","name":"DB","abstract":false,"superclass":{"html_id":"bushdb/Struct","kind":"struct","full_name":"Struct","name":"Struct"},"ancestors":[{"html_id":"bushdb/Struct","kind":"struct","full_name":"Struct","name":"Struct"},{"html_id":"bushdb/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"bushdb/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src\\bushdb\\db.cr","line_number":22,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L22"}],"repository_name":"bushdb","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"bushdb/BushDB","kind":"module","full_name":"BushDB","name":"BushDB"},"doc":"A structure for database management - Set, get, has, update, delete, clear and napalm.\n\nExample:\n```\nrequire \"bushdb\"\n\ndb = BushDB::DB.new\ndb.set(\"key name\", \"Some text\")\ndb.get(\"key name\") # => \"Some text\"\ndb.has(\"key name\") # => true\ndb.delete(\"key name\")\ndb.clear\ndb.napalm\n```\n","summary":"<p>A structure for database management - Set, get, has, update, delete, clear and napalm.</p>","constructors":[{"html_id":"new-class-method","name":"new","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":22,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L22"},"def":{"name":"new","visibility":"Public","body":"x = allocate\nif x.responds_to?(:finalize)\n  ::GC.add_finalizer(x)\nend\nx\n"}}],"instance_methods":[{"html_id":"branch_mode:Int32-instance-method","name":"branch_mode","doc":"Directory permissions.\nThe linux-style permission mode can be specified, with a default of 777 (0o777).","summary":"<p>Directory permissions.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":31,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L31"},"def":{"name":"branch_mode","return_type":"Int32","visibility":"Public","body":"@branch_mode"}},{"html_id":"branch_mode=(branch_mode:Int32)-instance-method","name":"branch_mode=","doc":"Directory permissions.\nThe linux-style permission mode can be specified, with a default of 777 (0o777).","summary":"<p>Directory permissions.</p>","abstract":false,"args":[{"name":"branch_mode","external_name":"branch_mode","restriction":"Int32"}],"args_string":"(branch_mode : Int32)","args_html":"(branch_mode : Int32)","location":{"filename":"src\\bushdb\\db.cr","line_number":31,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L31"},"def":{"name":"branch_mode=","args":[{"name":"branch_mode","external_name":"branch_mode","restriction":"Int32"}],"visibility":"Public","body":"@branch_mode = branch_mode"}},{"html_id":"clear-instance-method","name":"clear","doc":"Remove directory of database.\nIf the directory is missing, an #ErrorDirMissing exception is raised.\nWARNING: Be careful, this will remove all keys.\n\nExample:\n```\nrequire \"bushdb\"\n\ndb = BushDB::DB.new\ndb.clear\ndb.clear # => DirMissing\n```\n","summary":"<p>Remove directory of database.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":198,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L198"},"def":{"name":"clear","visibility":"Public","body":"db_path : Path = @root_store / @db_name\nif Dir.exists?(db_path)\n  return FileUtils.rm_rf(db_path)\nend\nraise(BushDB::Errors::DirMissing.new(@db_name))\n"}},{"html_id":"clear?:Bool-instance-method","name":"clear?","doc":"Remove directory of database.\nReturns false if the directory is missing.\nWARNING: Be careful, this will remove all keys.\n\nExample:\n```\nrequire \"bushdb\"\n\ndb = BushDB::DB.new\ndb.clear? # => true\ndb.clear? # => false\n```\n","summary":"<p>Remove directory of database.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":217,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L217"},"def":{"name":"clear?","return_type":"Bool","visibility":"Public","body":"db_path : Path = @root_store / @db_name\nif Dir.exists?(db_path)\n  FileUtils.rm_rf(db_path)\n  return true\nend\nfalse\n"}},{"html_id":"db_name:String-instance-method","name":"db_name","doc":"Database name.\nDefaule by = \"store\"","summary":"<p>Database name.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":28,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L28"},"def":{"name":"db_name","return_type":"String","visibility":"Public","body":"@db_name"}},{"html_id":"db_name=(db_name:String)-instance-method","name":"db_name=","doc":"Database name.\nDefaule by = \"store\"","summary":"<p>Database name.</p>","abstract":false,"args":[{"name":"db_name","external_name":"db_name","restriction":"String"}],"args_string":"(db_name : String)","args_html":"(db_name : String)","location":{"filename":"src\\bushdb\\db.cr","line_number":28,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L28"},"def":{"name":"db_name=","args":[{"name":"db_name","external_name":"db_name","restriction":"String"}],"visibility":"Public","body":"@db_name = db_name"}},{"html_id":"delete(key:String)-instance-method","name":"delete","doc":"Delete the key-value from the database.\nIf the key is missing, an #ErrorKeyMissing exception is raised.\n\nExample:\n```\nrequire \"bushdb\"\n\ndb = BushDB::DB.new\ndb.set(\"key name\", \"Some text\")\ndb.delete(\"key name\")\ndb.get(\"key name\")    # => nil\ndb.delete(\"key name\") # => KeyMissing\n```\n","summary":"<p>Delete the key-value from the database.</p>","abstract":false,"args":[{"name":"key","external_name":"key","restriction":"String"}],"args_string":"(key : String)","args_html":"(key : String)","location":{"filename":"src\\bushdb\\db.cr","line_number":137,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L137"},"def":{"name":"delete","args":[{"name":"key","external_name":"key","restriction":"String"}],"visibility":"Public","body":"md5_str : String = Digest::MD5.hexdigest(key)\nmd5_path_str : String = (md5_str.split(%r())).join(\"/\")\nleaf_path : Path = Path.new(@root_store, @db_name, md5_path_str, \"leaf.json\")\nif File.file?(leaf_path)\n  data : Hash(String, String) = Hash(String, String).from_json(File.read(leaf_path))\n  if data.delete(key).nil?\n    raise(BushDB::Errors::KeyMissing.new(key))\n  end\n  File.write(leaf_path, data.to_json, perm = @leaf_mode)\nelse\n  raise(BushDB::Errors::KeyMissing.new(key))\nend\n"}},{"html_id":"delete?(key:String):Bool-instance-method","name":"delete?","doc":"Delete the key-value from the database.\nReturns false if the key is missing.\n\nExample:\n```\nrequire \"bushdb\"\n\ndb = BushDB::DB.new\ndb.set(\"key name\", \"Some text\")\ndb.delete?(\"key name\") # => true\ndb.get(\"key name\")     # => nil\ndb.delete?(\"key name\") # => false\n```\n","summary":"<p>Delete the key-value from the database.</p>","abstract":false,"args":[{"name":"key","external_name":"key","restriction":"String"}],"args_string":"(key : String) : Bool","args_html":"(key : String) : Bool","location":{"filename":"src\\bushdb\\db.cr","line_number":168,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L168"},"def":{"name":"delete?","args":[{"name":"key","external_name":"key","restriction":"String"}],"return_type":"Bool","visibility":"Public","body":"md5_str : String = Digest::MD5.hexdigest(key)\nmd5_path_str : String = (md5_str.split(%r())).join(\"/\")\nleaf_path : Path = Path.new(@root_store, @db_name, md5_path_str, \"leaf.json\")\nif File.file?(leaf_path)\n  data : Hash(String, String) = Hash(String, String).from_json(File.read(leaf_path))\n  if data.delete(key).nil?\n    return false\n  end\n  File.write(leaf_path, data.to_json, perm = @leaf_mode)\n  return true\nend\nfalse\n"}},{"html_id":"get(key:String):String|Nil-instance-method","name":"get","doc":"Get the value by key from the database.\n\nExample:\n```\nrequire \"bushdb\"\n\ndb = BushDB::DB.new\ndb.set(\"key name\", \"Some text\")\ndb.get(\"key name\")    # => \"Some text\"\ndb.get(\"key missing\") # => nil\n```\n","summary":"<p>Get the value by key from the database.</p>","abstract":false,"args":[{"name":"key","external_name":"key","restriction":"String"}],"args_string":"(key : String) : String | Nil","args_html":"(key : String) : String | Nil","location":{"filename":"src\\bushdb\\db.cr","line_number":83,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L83"},"def":{"name":"get","args":[{"name":"key","external_name":"key","restriction":"String"}],"return_type":"String | Nil","visibility":"Public","body":"md5_str : String = Digest::MD5.hexdigest(key)\nmd5_path_str : String = (md5_str.split(%r())).join(\"/\")\nleaf_path : Path = Path.new(@root_store, @db_name, md5_path_str, \"leaf.json\")\nif File.file?(leaf_path)\n  return (Hash(String, String).from_json(File.read(leaf_path)))[key]?\nend\nnil\n"}},{"html_id":"has(key:String):Bool-instance-method","name":"has","doc":"Check the presence of a key in the database.\n\nExample:\n```\nrequire \"bushdb\"\n\ndb = BushDB::DB.new\ndb.set(\"key name\", \"Some text\")\ndb.has(\"key name\")    # => true\ndb.has(\"key missing\") # => false\n```\n","summary":"<p>Check the presence of a key in the database.</p>","abstract":false,"args":[{"name":"key","external_name":"key","restriction":"String"}],"args_string":"(key : String) : Bool","args_html":"(key : String) : Bool","location":{"filename":"src\\bushdb\\db.cr","line_number":108,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L108"},"def":{"name":"has","args":[{"name":"key","external_name":"key","restriction":"String"}],"return_type":"Bool","visibility":"Public","body":"md5_str : String = Digest::MD5.hexdigest(key)\nmd5_path_str : String = (md5_str.split(%r())).join(\"/\")\nleaf_path : Path = Path.new(@root_store, @db_name, md5_path_str, \"leaf.json\")\nif File.file?(leaf_path)\n  flag : Bool = (/(?:\"#{key}\":)/).matches?(File.read(leaf_path))\n  return flag\nend\nfalse\n"}},{"html_id":"initialize-instance-method","name":"initialize","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":22,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L22"},"def":{"name":"initialize","visibility":"Public","body":""}},{"html_id":"leaf_mode:File::Permissions-instance-method","name":"leaf_mode","doc":"File permissions.\nDefault by 0o666 for read-write.","summary":"<p>File permissions.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":34,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L34"},"def":{"name":"leaf_mode","return_type":"File::Permissions","visibility":"Public","body":"@leaf_mode"}},{"html_id":"leaf_mode=(leaf_mode:File::Permissions)-instance-method","name":"leaf_mode=","doc":"File permissions.\nDefault by 0o666 for read-write.","summary":"<p>File permissions.</p>","abstract":false,"args":[{"name":"leaf_mode","external_name":"leaf_mode","restriction":"File::Permissions"}],"args_string":"(leaf_mode : File::Permissions)","args_html":"(leaf_mode : File::Permissions)","location":{"filename":"src\\bushdb\\db.cr","line_number":34,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L34"},"def":{"name":"leaf_mode=","args":[{"name":"leaf_mode","external_name":"leaf_mode","restriction":"File::Permissions"}],"visibility":"Public","body":"@leaf_mode = leaf_mode"}},{"html_id":"napalm-instance-method","name":"napalm","doc":"Delete the root directory.\nIf the directory is missing, an #ErrorDirMissing exception is raised.\nWARNING: Be careful, this will remove all databases.\nNOTE: The main purpose is tests.\n\nExample:\n```\nrequire \"bushdb\"\n\ndb = BushDB::DB.new\ndb.napalm\ndb.napalm # => DirMissing\n```\n","summary":"<p>Delete the root directory.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":240,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L240"},"def":{"name":"napalm","visibility":"Public","body":"if Dir.exists?(@root_store)\n  return FileUtils.rm_rf(@root_store)\nend\nraise(BushDB::Errors::DirMissing.new(@root_store))\n"}},{"html_id":"napalm?:Bool-instance-method","name":"napalm?","doc":"Delete the root directory.\nReturns false if the root directory is missing.\nWARNING: Be careful, this will remove all databases.\nNOTE: The main purpose is tests.\n\nExample:\n```\nrequire \"bushdb\"\n\ndb = BushDB::DB.new\ndb.napalm? # => true\ndb.napalm? # => false\n```\n","summary":"<p>Delete the root directory.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":259,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L259"},"def":{"name":"napalm?","return_type":"Bool","visibility":"Public","body":"if Dir.exists?(@root_store)\n  FileUtils.rm_rf(@root_store)\n  return true\nend\nfalse\n"}},{"html_id":"root_store:Path-instance-method","name":"root_store","doc":"Root directory for databases.\nDefaule by = \"BushDB\"","summary":"<p>Root directory for databases.</p>","abstract":false,"location":{"filename":"src\\bushdb\\db.cr","line_number":25,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L25"},"def":{"name":"root_store","return_type":"Path","visibility":"Public","body":"@root_store"}},{"html_id":"root_store=(root_store:Path)-instance-method","name":"root_store=","doc":"Root directory for databases.\nDefaule by = \"BushDB\"","summary":"<p>Root directory for databases.</p>","abstract":false,"args":[{"name":"root_store","external_name":"root_store","restriction":"Path"}],"args_string":"(root_store : Path)","args_html":"(root_store : Path)","location":{"filename":"src\\bushdb\\db.cr","line_number":25,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L25"},"def":{"name":"root_store=","args":[{"name":"root_store","external_name":"root_store","restriction":"Path"}],"visibility":"Public","body":"@root_store = root_store"}},{"html_id":"set(key:String,value:String)-instance-method","name":"set","doc":"Add or update key-value pair(s) to the database.\n\nExample:\n```\nrequire \"bushdb\"\n\ndb = BushDB::DB.new\ndb.set(\"key name\", \"Some text\")\n```\n","summary":"<p>Add or update key-value pair(s) to the database.</p>","abstract":false,"args":[{"name":"key","external_name":"key","restriction":"String"},{"name":"value","external_name":"value","restriction":"String"}],"args_string":"(key : String, value : String)","args_html":"(key : String, value : String)","location":{"filename":"src\\bushdb\\db.cr","line_number":46,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\db.cr#L46"},"def":{"name":"set","args":[{"name":"key","external_name":"key","restriction":"String"},{"name":"value","external_name":"value","restriction":"String"}],"visibility":"Public","body":"md5_str : String = Digest::MD5.hexdigest(key)\nmd5_path_str : String = (md5_str.split(%r())).join(\"/\")\nbranch_path : Path = Path.new(@root_store, @db_name, md5_path_str)\nif Dir.exists?(branch_path)\nelse\n  Dir.mkdir_p(branch_path, mode = @branch_mode)\nend\nleaf_path : Path = branch_path / \"leaf.json\"\nif File.file?(leaf_path)\n  data : Hash(String, String) = Hash(String, String).from_json(File.read(leaf_path))\n  data[key] = value\n  File.write(leaf_path, data.to_json, perm = @leaf_mode)\nelse\n  File.write(leaf_path, Hash {key => value}.to_json, perm = @leaf_mode)\nend\n"}}]},{"html_id":"bushdb/BushDB/Errors","path":"BushDB/Errors.html","kind":"module","full_name":"BushDB::Errors","name":"Errors","abstract":false,"locations":[{"filename":"src\\bushdb\\errors.cr","line_number":3,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\errors.cr#L3"}],"repository_name":"bushdb","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"bushdb/BushDB","kind":"module","full_name":"BushDB","name":"BushDB"},"types":[{"html_id":"bushdb/BushDB/Errors/BushDBException","path":"BushDB/Errors/BushDBException.html","kind":"class","full_name":"BushDB::Errors::BushDBException","name":"BushDBException","abstract":false,"superclass":{"html_id":"bushdb/Exception","kind":"class","full_name":"Exception","name":"Exception"},"ancestors":[{"html_id":"bushdb/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"bushdb/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"bushdb/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src\\bushdb\\errors.cr","line_number":5,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\errors.cr#L5"}],"repository_name":"bushdb","program":false,"enum":false,"alias":false,"const":false,"subclasses":[{"html_id":"bushdb/BushDB/Errors/DirMissing","kind":"class","full_name":"BushDB::Errors::DirMissing","name":"DirMissing"},{"html_id":"bushdb/BushDB/Errors/KeyMissing","kind":"class","full_name":"BushDB::Errors::KeyMissing","name":"KeyMissing"}],"namespace":{"html_id":"bushdb/BushDB/Errors","kind":"module","full_name":"BushDB::Errors","name":"Errors"},"doc":"Root custom exception.","summary":"<p>Root custom exception.</p>"},{"html_id":"bushdb/BushDB/Errors/DirMissing","path":"BushDB/Errors/DirMissing.html","kind":"class","full_name":"BushDB::Errors::DirMissing","name":"DirMissing","abstract":false,"superclass":{"html_id":"bushdb/BushDB/Errors/BushDBException","kind":"class","full_name":"BushDB::Errors::BushDBException","name":"BushDBException"},"ancestors":[{"html_id":"bushdb/BushDB/Errors/BushDBException","kind":"class","full_name":"BushDB::Errors::BushDBException","name":"BushDBException"},{"html_id":"bushdb/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"bushdb/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"bushdb/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src\\bushdb\\errors.cr","line_number":15,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\errors.cr#L15"}],"repository_name":"bushdb","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"bushdb/BushDB/Errors","kind":"module","full_name":"BushDB::Errors","name":"Errors"},"doc":"Error of missing directory.","summary":"<p>Error of missing directory.</p>","constructors":[{"html_id":"new(directory:String|Path)-class-method","name":"new","abstract":false,"args":[{"name":"directory","external_name":"directory","restriction":"String | Path"}],"args_string":"(directory : String | Path)","args_html":"(directory : String | Path)","location":{"filename":"src\\bushdb\\errors.cr","line_number":16,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\errors.cr#L16"},"def":{"name":"new","args":[{"name":"directory","external_name":"directory","restriction":"String | Path"}],"visibility":"Public","body":"_ = allocate\n_.initialize(directory)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}]},{"html_id":"bushdb/BushDB/Errors/KeyMissing","path":"BushDB/Errors/KeyMissing.html","kind":"class","full_name":"BushDB::Errors::KeyMissing","name":"KeyMissing","abstract":false,"superclass":{"html_id":"bushdb/BushDB/Errors/BushDBException","kind":"class","full_name":"BushDB::Errors::BushDBException","name":"BushDBException"},"ancestors":[{"html_id":"bushdb/BushDB/Errors/BushDBException","kind":"class","full_name":"BushDB::Errors::BushDBException","name":"BushDBException"},{"html_id":"bushdb/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"bushdb/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"bushdb/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src\\bushdb\\errors.cr","line_number":8,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\errors.cr#L8"}],"repository_name":"bushdb","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"bushdb/BushDB/Errors","kind":"module","full_name":"BushDB::Errors","name":"Errors"},"doc":"Error of missing key.","summary":"<p>Error of missing key.</p>","constructors":[{"html_id":"new(key:String)-class-method","name":"new","abstract":false,"args":[{"name":"key","external_name":"key","restriction":"String"}],"args_string":"(key : String)","args_html":"(key : String)","location":{"filename":"src\\bushdb\\errors.cr","line_number":9,"url":"https://github.com/kebasyaty/bushdb/blob/9b60898364982f4fd58a451cf72317d1a2713155/src\\bushdb\\errors.cr#L9"},"def":{"name":"new","args":[{"name":"key","external_name":"key","restriction":"String"}],"visibility":"Public","body":"_ = allocate\n_.initialize(key)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}]}]}]}]}})