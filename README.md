[![Logo](https://github.com/kebasyaty/bushdb/raw/v0/logo/logo.svg "Logo")](https://github.com/kebasyaty/bushdb "Logo")

# bushDB

**bushDB** is a fast key-value storage library that provides an ordered mapping from string keys to string values.
<br>
The library uses fractal-tree addressing.
<br>
The maximum size of the database is 16\*\*32=340282366920938463463374607431768211456 branches,
each branch can store one or more keys.
<br>
The value of any key can be obtained in 32 steps, thereby achieving high performance.
<br>
There is no need to iterate through all the keys in search of the desired value.

<p>
  <img src="https://github.com/kebasyaty/bushdb/raw/v0/pictures/status_project/Status_Project-Beta-.svg"
    alt="Status Project">
</p>

[![CI](https://github.com/kebasyaty/bushdb/workflows/CI/badge.svg)](https://github.com/kebasyaty/bushdb/actions)
[![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://kebasyaty.github.io/bushdb/)
[![Crystal](https://img.shields.io/badge/crystal-v1.9%2B-red)](https://crystal-lang.org/)
[![GitHub license](https://badgen.net/github/license/kebasyaty/bushdb)](https://github.com/kebasyaty/bushdb/blob/v0/LICENSE)

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     bushdb:
       github: kebasyaty/bushdb
       version: ~> 0.6.4
   ```

2. Run `shards install`

## Usage

```crystal
require "bushdb"

# Create DB
db : BushDB::DB = BushDB::DB.new

# Set, get, delete
db.set("key name", "Some text")
db.get("key name") # => "Some text"
db.has("key name") # => true
#
db.delete("key name")
# or
db.delete?("key name") # => true
#
# If the key has been deleted.
db.get("key name") # => nil

# Delete the database directory with all the keys in it.
db.clear
# or
db.clear? # => true

# Delete the root directory with all databases in it.
db.napalm
# or
db.napalm? # => true
```

## License

**This project is licensed under the** [MIT](https://github.com/kebasyaty/bushdb/blob/v0/LICENSE "MIT").

## Changelog

[View the change history.](https://github.com/kebasyaty/bushdb/blob/v0/CHANGELOG.md "View the change history.")

## Contributing

1. Fork it (<https://github.com/kebasyaty/bushdb/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [kebasyaty](https://github.com/kebasyaty) Gennady Kostyunin - creator and maintainer
