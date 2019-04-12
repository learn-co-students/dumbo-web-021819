class ToysController < ApplicationController
  def index
    @toys = Toy.all

    render json: @toys
  end

  def show
    @toy = Toy.find(params[:id])

    render json: @toy
  end

  def create
    @toy = Toy.create(toy_params)

    render json: @toy
  end

  private

  def toy_params
    #params: {
    #     name: "hi",
    #     image: "cool.jpg",
    #     likes: 3
    # }
    params.permit(:name, :image, :likes)
  end

end
