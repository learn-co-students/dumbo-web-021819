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
    if @dog.valid?
      redirect_to @dog
    else
      render :new
      # redirect_to new_dog_path
    end
  end

  def edit
  end

  def update
    if @dog.update(dog_params)
      redirect_to @dog
    else
      render :edit
    end
  end

  private

  def dog_params
    params.require(:dog).permit(:name, :tail_length, :color_hexadecimal)
  end

  def get_dog
    @dog = Dog.find(params[:id])
  end

end
