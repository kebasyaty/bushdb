# Custom exceptions for BushDB.
module BushDB
  # Error of missing key.
  class ErrorKeyMissing < Exception
    def initialize(key : String, @cause : Exception | Nil = nil)
      @message = %(The "#{key}" key is missing.)
    end
  end

  # Error of missing directory.
  class ErrorDirMissing < Exception
    def initialize(directory : String | Path, @cause : Exception | Nil = nil)
      if directory.is_a?(String)
        @message = %(The database directory "#{directory}" is missing.)
      else
        @message = %(The root directory "#{directory.to_s}" is missing.)
      end
    end
  end
end
