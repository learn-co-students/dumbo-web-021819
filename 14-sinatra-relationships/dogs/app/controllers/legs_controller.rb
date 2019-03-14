class LegsController < ApplicationController


  get "/legs/new" do
    @all_dogs = Dog.all
    @leg = Leg.new
    erb :"legs/new"
  end

  post "/legs" do
    @leg = Leg.create(params[:leg])
    redirect(to("/dogs/#{ @leg.dog_id }"))
  end

end


