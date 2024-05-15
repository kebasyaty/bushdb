# bushDB

**bushDB** is a fast key-value storage library that provides an ordered mapping from string keys to string values.
<br>
The library uses fractal-tree addressing.
<br>
The maximum size of the database is _16\*\*32=340282366920938463463374607431768211456_ branches,
each branch can store one or more keys.
<br>
The value of any key can be obtained in 32 steps, thereby achieving high performance.
<br>
There is no need to iterate through all the keys in search of the desired value.

[![CI](https://github.com/kebasyaty/bushdb/workflows/CI/badge.svg)](https://github.com/kebasyaty/bushdb/actions)
[![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://kebasyaty.github.io/bushdb/)
[![Crystal](https://img.shields.io/badge/crystal-v1.9%2B-red)](https://crystal-lang.org/)
[![GitHub release](https://img.shields.io/github/release/kebasyaty/bushdb)](https://github.com/kebasyaty/bushdb/releases/)
[![GitHub license](https://img.shields.io/github/license/kebasyaty/bushdb)](https://github.com/kebasyaty/bushdb/blob/main/LICENSE)
[![GitHub repository](https://img.shields.io/badge/--ecebeb?logo=github&logoColor=000000)](https://github.com/kebasyaty/bushdb)

<p>
  <a href="https://github.com/kebasyaty/bushdb">
    <img src="https://raw.githubusercontent.com/kebasyaty/bushdb/main/pictures/status_project/Status_Project-Beta-.svg"
      alt="Status Project">
  </a>
</p>

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     bushdb:
       github: kebasyaty/bushdb
       version: ~> 0.6.10
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
db.has?("key name") # => true
#
db.delete("key name")
#
# If the key has been deleted.
db.get("key name") # => nil
db.has?("key name") # => false

# Delete the database directory with all the keys in it.
db.clear

# Delete the root directory with all databases in it.
db.napalm
```

## Contributing

1. Fork it (<https://github.com/kebasyaty/bushdb/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [kebasyaty](https://github.com/kebasyaty) Gennady Kostyunin - creator and maintainer

## Changelog

[View the change history.](https://github.com/kebasyaty/bushdb/blob/main/CHANGELOG.md "View the change history.")

## License

**This project is licensed under the** [MIT](https://github.com/kebasyaty/bushdb/blob/main/LICENSE "MIT")**.**
