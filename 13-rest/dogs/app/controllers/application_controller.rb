require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    # @dogs = Dog.all
    erb :dogs
  end

  #index
  get "/dogs/" do
    @dogs = Dog.all
    erb :dogs
  end

  #new
  get "/dogs/new" do
    erb :new
  end

  #show
  get '/dogs/:id' do
    @dog = Dog.find(params[:id])
    erb :show
  end

  #create
  post '/dogs' do
    binding.pry
    @dog = Dog.create(params)
    redirect to "/dogs/#{ @dog.id }"
  end


  get "/dogs/:id/edit" do
    @dog = Dog.find(params[:id])
    erb :edit
  end

 #  params = {
 #            "_method"=>"PATCH",
 #             "name"=>"COSTANZA",
 #             "tail_length"=>"2",
 #             "birth_year"=>"1990",
 #             "fluffiness"=>"0",
 #             "id"=>"10"
 #           }

 # params = {
 #            "_method"=>"PATCH",
 #             dog: { 
 #                "name"=>"COSTANZA",
 #                "tail_length"=>"2",
 #                "birth_year"=>"1990",
 #                "fluffiness"=>"0"
 #              },
 #             "id"=>"10"
 #           }


  #update
  patch "/dogs/:id" do
    # params.delete("_method")
    @dog = Dog.find(params[:id])
    @dog.update(params[:dog])
    redirect to "/dogs/#{ @dog.id }"
  end

  delete "/dogs/:id" do
    binding.pry
  end

  get '/search' do
    @dogs = Dog.search(params[:q])
    erb :dogs
  end



end
