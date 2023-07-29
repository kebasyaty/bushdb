[![Logo](https://github.com/kebasyaty/bushdb/raw/main/images/logo.svg "Logo")](https://github.com/kebasyaty/bushdb "Logo")

# bushDB

bushDB is a fast key-value storage library that provides an ordered mapping from string keys to string values.
The library uses fractal-tree addressing.
The maximum size of the database is 16\*\*32=340282366920938463463374607431768211456 keys.
The value of any key can be obtained in 32 steps, thereby achieving high performance.

[![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](LINK-TO-YOUR-DOCUMENTATION)
![Crystal min version](https://img.shields.io/badge/crystal-v1.9%2B-red)
[![GitHub release](https://img.shields.io/github/release/kebasyaty/bushdb.svg)](https://github.com/kebasyaty/bushdb/releases)
[![Github all releases](https://img.shields.io/github/downloads/Naereen/StrapDown.js/total.svg)](https://github.com/kebasyaty/bushdb/releases/)
[![GitHub latest commit](https://badgen.net/github/last-commit/kebasyaty/bushdb)](https://github.com/kebasyaty/bushdb/commit/)
[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/kebasyaty/bushdb/blob/main/LICENSE)

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     bushdb:
       github: kebasyaty/bushdb
   ```

2. Run `shards install`

## Usage

```crystal
require "bushdb"
```

## License

**This project is licensed under the** [MIT](https://github.com/kebasyaty/bushdb/blob/main/LICENSE "MIT").

## Changelog

[View the change history.](https://github.com/kebasyaty/bushdb/blob/master/CHANGELOG.md "View the change history.")

## Contributing

1. Fork it (<https://github.com/kebasyaty/bushdb/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [kebasyaty](https://github.com/kebasyaty) Gennady Kostyunin - creator and maintainer
