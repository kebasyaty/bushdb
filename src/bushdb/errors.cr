# Custom exceptions for BushDB.
module BushDB
  module Errors
    # Root custom exception.
    class BushDBException < Exception; end

    # Error of missing key.
    class KeyMissing < BushDBException
      def initialize(key : String)
        super(%(The "#{key}" key is missing.))
      end
    end

    # Error of missing directory.
    class DirMissing < BushDBException
      def initialize(directory : String | Path)
        if directory.is_a?(String)
          super(%(The database directory "#{directory}" is missing.))
        else
          super(%(The root directory "#{directory.to_s}" is missing.))
        end
      end
    end
  end
end
