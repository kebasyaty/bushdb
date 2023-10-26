require "../spec_helper"

describe BushDB::DB do
  describe "#set" do
    # EN
    it "=> add a non-existent key-value" do
      DB_TEST.set("key name", "Some text").should be_nil
    end
    it "=> update the value of an existing key" do
      DB_TEST.set("key name", "New some text").should be_nil
    end
    # RU
    it "=> (ru) add a non-existent key-value" do
      DB_TEST.set("название ключа", "Какой-то текст").should be_nil
    end
    it "=> (ru) update the value of an existing key" do
      DB_TEST.set("название ключа", "Какой-то новый текст").should be_nil
    end
  end

  describe "#get" do
    # EN
    it "=> get a value by an existing key" do
      DB_TEST.get("key name").should eq "New some text"
    end
    it "=> get a value by an not existing key" do
      DB_TEST.get("key missing").should be_nil
    end
    # RU
    it "=> (ru) get a value by an existing key" do
      DB_TEST.get("название ключа").should eq "Какой-то новый текст"
    end
    it "=> (ru) get a value by an not existing key" do
      DB_TEST.get("ключ отсутствует").should be_nil
    end
  end

  describe "#has" do
    # EN
    it "=> check for an existing key" do
      DB_TEST.has("key name").should be_true
    end
    it "=> check for a non-existent key" do
      DB_TEST.has("key missing").should be_false
    end
    # RU
    it "=> (ru) check for an existing key" do
      DB_TEST.has("название ключа").should be_true
    end
    it "=> (ru) check for a non-existent key" do
      DB_TEST.has("ключ отсутствует").should be_false
    end
  end

  describe "#delete" do
    # EN
    it "=> add keys for delete" do
      DB_TEST.set("key 1", "Some text 1").should be_nil
      DB_TEST.set("key 2", "Some text 2").should be_nil
    end
    it "=> delete key 1" do
      DB_TEST.get("key 1").should eq "Some text 1"
      DB_TEST.delete("key 1").should be_nil
      DB_TEST.get("key 1").should be_nil
      DB_TEST.has("key 1").should be_false
    end
    it "=> delete key 2" do
      DB_TEST.get("key 2").should eq "Some text 2"
      DB_TEST.delete("key 2").should be_nil
      DB_TEST.get("key 2").should be_nil
      DB_TEST.has("key 2").should be_false
    end
    it "=> delete a non-existent key" do
      key : String = "key missing"
      ex = expect_raises(BushDB::KeyMissing) do
        DB_TEST.delete(key)
      end
      ex.message.should eq %(The "#{key}" key is missing.)
    end
    # RU
    it "=> (ru) add keys for delete" do
      DB_TEST.set("ключ 1", "Какой-то новый текст 1").should be_nil
      DB_TEST.set("ключ 2", "Какой-то новый текст 2").should be_nil
    end
    it "=> (ru) delete key 1" do
      DB_TEST.get("ключ 1").should eq "Какой-то новый текст 1"
      DB_TEST.delete("ключ 1").should be_nil
      DB_TEST.get("ключ 1").should be_nil
      DB_TEST.has("ключ 1").should be_false
    end
    it "=> (ru) delete key 2" do
      DB_TEST.get("ключ 2").should eq "Какой-то новый текст 2"
      DB_TEST.delete("ключ 2").should be_nil
      DB_TEST.get("ключ 2").should be_nil
      DB_TEST.has("ключ 2").should be_false
    end
    it "=> (ru) delete a non-existent key" do
      key : String = "ключ отсутствует"
      ex = expect_raises(BushDB::KeyMissing) do
        DB_TEST.delete(key)
      end
      ex.message.should eq %(The "#{key}" key is missing.)
    end
  end

  describe "#delete?" do
    # EN
    it "=> add keys for delete" do
      DB_TEST.set("key 1", "Some text 1").should be_nil
      DB_TEST.set("key 2", "Some text 2").should be_nil
    end
    it "=> delete key 1" do
      DB_TEST.get("key 1").should eq "Some text 1"
      DB_TEST.delete?("key 1").should be_true
      DB_TEST.get("key 1").should be_nil
      DB_TEST.has("key 1").should be_false
    end
    it "=> delete key 2" do
      DB_TEST.get("key 2").should eq "Some text 2"
      DB_TEST.delete?("key 2").should be_true
      DB_TEST.get("key 2").should be_nil
      DB_TEST.has("key 2").should be_false
    end
    it "=> delete a non-existent key" do
      DB_TEST.delete?("key 1").should be_false
      DB_TEST.delete?("key 2").should be_false
      DB_TEST.has("key 1").should be_false
      DB_TEST.has("key 2").should be_false
    end
    # RU
    it "=> (ru) add keys for delete" do
      DB_TEST.set("ключ 1", "Какой-то новый текст 1").should be_nil
      DB_TEST.set("ключ 2", "Какой-то новый текст 2").should be_nil
    end
    it "=> (ru) delete key 1" do
      DB_TEST.get("ключ 1").should eq "Какой-то новый текст 1"
      DB_TEST.delete?("ключ 1").should be_true
      DB_TEST.get("ключ 1").should be_nil
      DB_TEST.has("ключ 1").should be_false
    end
    it "=> (ru) delete key 2" do
      DB_TEST.get("ключ 2").should eq "Какой-то новый текст 2"
      DB_TEST.delete?("ключ 2").should be_true
      DB_TEST.get("ключ 2").should be_nil
      DB_TEST.has("ключ 2").should be_false
    end
    it "=> (ru) delete a non-existent key" do
      DB_TEST.delete?("ключ 1").should be_false
      DB_TEST.delete?("ключ 2").should be_false
      DB_TEST.has("ключ 1").should be_false
      DB_TEST.has("ключ 2").should be_false
    end
  end

  describe "#clear" do
    it "=> delete the database directory with all the keys in it" do
      DB_TEST.clear.should be_nil
    end
    it "=> attempting to delete a non-existent database directory" do
      ex = expect_raises(BushDB::DirMissing) do
        DB_TEST.clear
      end
      ex.message.should eq %(The database directory "#{DB_TEST.db_name}" is missing.)
    end
    it "=> make sure the directory for the database is missing" do
      db_path : Path = DB_TEST.root_store / DB_TEST.db_name
      Dir.exists?(db_path).should be_false
    end
    it "=> get a value by an not existing key" do
      DB_TEST.get("key name").should be_nil
      DB_TEST.get("key missing").should be_nil
      DB_TEST.get("key 1").should be_nil
      DB_TEST.get("key 2").should be_nil
    end
    it "=> check for a non-existent key" do
      DB_TEST.has("key name").should be_false
      DB_TEST.has("key missing").should be_false
      DB_TEST.has("key 1").should be_false
      DB_TEST.has("key 2").should be_false
    end
  end

  describe "#clear?" do
    it "=> delete the database directory with all the keys in it" do
      DB_TEST.set("key name", "Some text") # For create a root directory and a database.
      DB_TEST.clear?.should be_true
    end
    it "=> attempting to delete a non-existent database directory" do
      DB_TEST.clear?.should be_false
    end
    it "=> make sure the directory for the database is missing" do
      db_path : Path = DB_TEST.root_store / DB_TEST.db_name
      Dir.exists?(db_path).should be_false
    end
    it "=> get a value by an not existing key" do
      DB_TEST.get("key name").should be_nil
      DB_TEST.get("key missing").should be_nil
      DB_TEST.get("key 1").should be_nil
      DB_TEST.get("key 2").should be_nil
    end
    it "=> check for a non-existent key" do
      DB_TEST.has("key name").should be_false
      DB_TEST.has("key missing").should be_false
      DB_TEST.has("key 1").should be_false
      DB_TEST.has("key 2").should be_false
    end
  end

  describe "#napalm" do
    it "=> delete the root directory with all databases in it" do
      DB_TEST.napalm.should be_nil
    end
    it "=> attempting to delete a non-existent root directory" do
      ex = expect_raises(BushDB::DirMissing) do
        DB_TEST.napalm
      end
      ex.message.should eq %(The root directory "#{DB_TEST.root_store.to_s}" is missing.)
    end
    it "=> make sure the root directory is missing" do
      Dir.exists?(DB_TEST.root_store).should be_false
    end
    it "=> get a value by an not existing key" do
      DB_TEST.get("key name").should be_nil
      DB_TEST.get("key missing").should be_nil
      DB_TEST.get("key 1").should be_nil
      DB_TEST.get("key 2").should be_nil
    end
    it "=> check for a non-existent key" do
      DB_TEST.has("key name").should be_false
      DB_TEST.has("key missing").should be_false
      DB_TEST.has("key 1").should be_false
      DB_TEST.has("key 2").should be_false
    end
  end

  describe "#napalm?" do
    it "=> delete the root directory with all databases in it" do
      DB_TEST.set("key name", "Some text") # For create a root directory and a database.
      DB_TEST.napalm?.should be_true
    end
    it "=> attempting to delete a non-existent root directory" do
      DB_TEST.napalm?.should be_false
    end
    it "=> make sure the root directory is missing" do
      Dir.exists?(DB_TEST.root_store).should be_false
    end
    it "=> get a value by an not existing key" do
      DB_TEST.get("key name").should be_nil
      DB_TEST.get("key missing").should be_nil
      DB_TEST.get("key 1").should be_nil
      DB_TEST.get("key 2").should be_nil
    end
    it "=> check for a non-existent key" do
      DB_TEST.has("key name").should be_false
      DB_TEST.has("key missing").should be_false
      DB_TEST.has("key 1").should be_false
      DB_TEST.has("key 2").should be_false
    end
  end
end
