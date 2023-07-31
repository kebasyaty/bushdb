require "spec"
require "file_utils"

require "../src/bushdb"

def create_test_db : BushDB::DB
  db : BushDB::DB = BushDB::DB.new
  db.root_store = "BushDB_crystal_test"
  db.db_name = "store_crystal_test"
  db
end
