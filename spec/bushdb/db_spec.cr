require "../spec_helper"

describe BushDB do
  describe "BushDB::DB" do
    describe ".new" do
      it "create an instance of the DB" do
        db = BushDB::DB.new
      end
      it "create_test_db method" do
        db : BushDB::DB = create_test_db
        db.should_not be_nil
      end
    end

    describe "#set" do
      db : BushDB::DB = create_test_db
      it "add a non-existent key-value" do
        db.set("key_name", "Some text").should be_nil
      end
      it "update the value of an existing key" do
        db.set("key_name", "New some text").should be_nil
      end
    end

    describe "#get" do
      db : BushDB::DB = create_test_db
      it "get a value by an existing key" do
        db.get("key_name").should eq "New some text"
      end
      it "get a value by an not existing key" do
        db.get("key_name_no").should be_nil
      end
    end

    describe "#clear" do
      db : BushDB::DB = create_test_db
      it "completely remove the directory of the database" do
        db.clear.should be_nil
      end
      it "check that there is no directory for the database" do
        db_path : Path = Path.new(db.root_store, db.db_name)
        Dir.exists?(db_path).should be_false
      end
    end

    describe "#napalm" do
      db : BushDB::DB = create_test_db
      it "delete the root directory" do
        db.napalm.should be_nil
      end
    end
  end
end
