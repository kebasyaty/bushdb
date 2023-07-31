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
        db.set("key name", "Some text").should be_nil
      end
      it "update the value of an existing key" do
        db.set("key name", "New some text").should be_nil
      end
    end

    describe "#get" do
      db : BushDB::DB = create_test_db
      it "get a value by an existing key" do
        db.get("key name").should eq "New some text"
      end
      it "get a value by an not existing key" do
        db.get("key missing").should be_nil
      end
    end

    describe "#delete" do
      db : BushDB::DB = create_test_db
      it "add keys" do
        db.set("key 1", "Some text 1").should be_nil
        db.set("key 2", "Some text 2").should be_nil
      end
      it "delete key 1" do
        db.get("key 1").should eq "Some text 1"
        db.delete("key 1").should be_nil
        db.get("key 1").should be_nil
      end
      it "delete key 2" do
        db.get("key 2").should eq "Some text 2"
        db.delete("key 2").should be_nil
        db.get("key 2").should be_nil
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
