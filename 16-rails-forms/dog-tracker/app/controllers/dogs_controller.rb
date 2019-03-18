class DogsController < ApplicationController
  # before_action(:get_dog, { only: [:show, :edit] })
  
  before_action :get_dog, only: [:show, :edit]

  def index
    @dogs = Dog.all
  end

  def show
  end

  def edit
  end

  private

  def get_dog
    @dog = Dog.find(params[:id])
  end

end
