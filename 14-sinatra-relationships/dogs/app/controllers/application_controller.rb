require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    # # @dogs = Dog.all
    # erb :dogs
    redirect to "/dogs"
  end


  

end
