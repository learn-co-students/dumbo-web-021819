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

  get "/dogs/" do
    @dogs = Dog.all
    erb :dogs
  end

  get '/dogs/:id' do
    @dog = Dog.find(params[:id])
    erb :show
  end

  get '/search' do
    @dogs = Dog.search(params[:q])
    erb :dogs
  end

end
