require "spec"

require "../src/bushdb"

def create_test_db : BushDB::DB
  db : BushDB::DB = BushDB::DB.new
  db.root_store = Path.new("BushDB_crystal_test")
  db.db_name = "store_crystal_test"
  db
end
