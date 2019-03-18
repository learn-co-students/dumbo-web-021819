class DogsController < ApplicationController
  # before_action(:get_dog, { only: [:show, :edit] })
  
  before_action :get_dog, only: [:show, :edit, :update]

  def index
    @dogs = Dog.all
  end

  def show
  end

  def new
    @dog = Dog.new
  end

  def create
    @dog = Dog.create(dog_params)
    redirect_to @dog
  end

  def edit
  end

  def update
    @dog.update(dog_params)
    redirect_to @dog
  end

  private

  def dog_params
    params.require(:dog).permit(:name, :tail_length, :color_hexadecimal)
  end

  def get_dog
    @dog = Dog.find(params[:id])
  end

end
