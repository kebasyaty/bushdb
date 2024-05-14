require "./bushdb/*"

# **bushDB** is a fast key-value storage library that provides an ordered mapping from string keys to string values.
# <br>
# The library uses fractal-tree addressing.
# <br>
# The maximum size of the database is _16\*\*32=340282366920938463463374607431768211456_ branches,
# each branch can store one or more keys.
# <br>
# The value of any key can be obtained in 32 steps, thereby achieving high performance.
# <br>
# There is no need to iterate through all the keys in search of the desired value.
module BushDB
  VERSION = "0.6.10"
end
