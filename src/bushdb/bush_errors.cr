# Custom exceptions for BushDB.
module BushDB
  # Error for missing keys.
  class ErrorKeyMissing < Exception
    def initialize(key : String, @cause : Exception | Nil = nil)
      @message = %(The "#{key}" key is missing.)
    end
  end
end
