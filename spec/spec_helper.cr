require "spec"
require "../src/bushdb"

def create_test_store : Bushdb::Store
  store = Bushdb::Store.new
  store
end
