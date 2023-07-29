require "./spec_helper"

describe Bushdb do
  describe "Bushdb::Store" do
    it "create an instance of the store" do
      store = Bushdb::Store.new
    end

    it "create_test_store method" do
      store : Bushdb::Store = create_test_store
      store.should_not be_nil
    end

    describe "#set" do
      it "add key-value pair to the database" do
        store : Bushdb::Store = create_test_store
        store.set(Hash{"key_name" => "Some text"}).should eq 1
        store.clear.should be_nil
        db_path : Path = Path.new(store.root_store, store.db_name)
        Dir.exists?(db_path).should be_false
      end
    end
  end
end
