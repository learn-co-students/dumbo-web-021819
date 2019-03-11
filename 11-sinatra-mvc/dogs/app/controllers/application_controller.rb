require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    # @dogs = Dog.all
    erb :dogs
  end

  post "/dogs" do
    @dogs = Dog.all
    erb :dogs
  end

end
