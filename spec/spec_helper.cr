require "spec"

require "../src/bushdb"

# Method for creating a database instance
def create_test_db : BushDB::DB
  db : BushDB::DB = BushDB::DB.new
  db.root_store = Path.new("BushDB_crystal_test")
  db.db_name = "store_crystal_test"
  db
end

describe ".new" do
  it "create an instance of the DB" do
    db = BushDB::DB.new
  end
  it "create_test_db method" do
    db : BushDB::DB = create_test_db
    db.should_not be_nil
  end
end

DB_TEST = create_test_db
