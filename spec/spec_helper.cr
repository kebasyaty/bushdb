require "spec"
require "../src/bushdb"

def create_test_store : BushDB::Store
  store = BushDB::Store.new
  store
end
