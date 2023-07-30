require "./spec_helper"

describe Bushdb do
  describe "Bushdb::Store" do
    describe ".new" do
      it "create an instance of the store" do
        store = Bushdb::Store.new
      end
      it "create_test_store method" do
        store : Bushdb::Store = create_test_store
        store.should_not be_nil
      end
    end

    describe "#set" do
      store : Bushdb::Store = create_test_store
      it "add a non-existent key-value" do
        store.set(Hash{"key_name" => "Some text"}).should eq 1
      end
      it "add a existent key-value" do
        store.set(Hash{"key_name" => "Some text"}).should eq 0
      end
      it "add a non-existent key-value - atomic operation" do
        data : Hash(String, String) = Hash(String, String).new
        data["key_name_2"] = "Some text 2"
        data["key_name_3"] = "Some text 3"
        data["key_name_4"] = "Some text 4"
        store.set(data).should eq 3
      end
      it "add a existent key-value - atomic operation" do
        data : Hash(String, String) = Hash(String, String).new
        data["key_name_2"] = "Some text 2"
        data["key_name_3"] = "Some text 3"
        data["key_name_4"] = "Some text 4"
        store.set(data).should eq 0
      end
    end

    describe "#get" do
      store : Bushdb::Store = create_test_store
      it "get a value by an existing key" do
        store.get("key_name").should eq "Some text"
      end
      it "get a value by an not existing key" do
        store.get("key_name_no").should be_nil
      end
    end

    describe "#clear" do
      store : Bushdb::Store = create_test_store
      it "remove all the keys" do
        store.clear.should be_nil
        db_path : Path = Path.new(store.root_store, store.db_name)
        Dir.exists?(db_path).should be_false
      end
    end
  end
end
