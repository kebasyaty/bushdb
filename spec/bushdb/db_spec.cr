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
      it "add keys for delete" do
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
      it "delete a non-existent key" do
        key : String = "key missing"
        ex = expect_raises(BushDB::ErrorKeyMissing) do
          db.delete(key)
        end
        ex.message.should eq %(The "#{key}" key is missing.)
      end
    end

    describe "#delete?" do
      db : BushDB::DB = create_test_db
      it "add keys for delete" do
        db.set("key 1", "Some text 1").should be_nil
        db.set("key 2", "Some text 2").should be_nil
      end
      it "delete key 1" do
        db.get("key 1").should eq "Some text 1"
        db.delete?("key 1").should be_true
        db.get("key 1").should be_nil
      end
      it "delete key 2" do
        db.get("key 2").should eq "Some text 2"
        db.delete?("key 2").should be_true
        db.get("key 2").should be_nil
      end
      it "delete a non-existent key" do
        db.delete?("key 1").should be_false
        db.delete?("key 2").should be_false
      end
    end

    describe "#clear" do
      db : BushDB::DB = create_test_db
      it "delete the database directory with all the keys in it" do
        db.clear.should be_nil
      end
      it "attempting to delete a non-existent database directory" do
        ex = expect_raises(BushDB::ErrorDirMissing) do
          db.clear
        end
        ex.message.should eq %(The database directory "#{db.db_name}" is missing.)
      end
      it "make sure the directory for the database is missing" do
        db_path : Path = Path.new(db.root_store, db.db_name)
        Dir.exists?(db_path).should be_false
      end
    end

    describe "#napalm" do
      db : BushDB::DB = create_test_db
      it "delete the root directory with all databases in it" do
        db.napalm.should be_nil
      end
      it "attempting to delete a non-existent root directory" do
        ex = expect_raises(BushDB::ErrorDirMissing) do
          db.napalm
        end
        ex.message.should eq %(The root directory "#{db.root_store.to_s}" is missing.)
      end
      it "make sure the root directory is missing" do
        Dir.exists?(db.root_store).should be_false
      end
    end
  end
end
