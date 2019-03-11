require 'pry'

class App

  def call(environment_hash)

    status_code = 418
    header = { "Content-type" =>  "text/html" }
    # binding.pry
    if environment_hash["PATH_INFO"] == "/hello"
      body = ["<!doctype html><html><head><title>HI</title></head><body>hello world</body></html>"]
    else
      body = ["go eat lunch"]
    end

    return [status_code, header, body]
  end

end
