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
        store.set("key_name", "Some text").should be_nil
      end
      it "add a existent key-value" do
        store.set("key_name", "New some text").should be_nil
      end
    end

    describe "#get" do
      store : Bushdb::Store = create_test_store
      it "get a value by an existing key" do
        store.get("key_name").should eq "New some text"
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
