class DogsController < ApplicationController

  #index
  get "/dogs" do
    unless params[:q]
      @dogs = Dog.all
    else
      @dogs = Dog.search(params[:q])
    end
    erb :"dogs/index"
  end

  #new
  get "/dogs/new" do
    @dog = Dog.new
    erb :"dogs/new"
  end

  #show
  get '/dogs/:id' do
    get_dog
    erb :"dogs/show"
  end

  #create
  post '/dogs' do
    @dog = Dog.create(params[:dog])
    redirect to "/dogs/#{ @dog.id }"
  end


  get "/dogs/:id/edit" do
    get_dog
    erb :"dogs/edit"
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
    get_dog
    @dog.update(params[:dog])
    redirect to "/dogs/#{ @dog.id }"
  end

  delete "/dogs/:id" do
    get_dog
    @dog.destroy
    redirect to "/dogs"
  end

  private

  def get_dog
    @dog = Dog.find(params[:id])
  end

end