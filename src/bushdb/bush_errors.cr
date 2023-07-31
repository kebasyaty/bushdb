# Custom exceptions for BushDB.
module BushDB
  class ErrorKeyMissing < Exception
    def initialize(key : String, @cause : Exception | Nil = nil)
      @message = %(The "#{key}" key is missing.)
    end
  end
end
