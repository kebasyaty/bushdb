[![Logo](https://github.com/kebasyaty/bushdb/raw/main/images/logo.svg "Logo")](https://github.com/kebasyaty/bushdb "Logo")

# bushDB

bushDB is a fast key-value storage library that provides an ordered mapping from string keys to String, Number, Array and Hash values.
The library uses fractal-tree addressing.
The maximum capacity of the database 340282366920938463463374607431768211456 addresses.
The value of any key can be obtained in 32 steps, thereby achieving high performance.

[![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](<LINK-TO-YOUR-DOCUMENTATION>)

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
