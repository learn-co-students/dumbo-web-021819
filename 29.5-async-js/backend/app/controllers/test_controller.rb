class TestController < ApplicationController

  def success
    render json: { data: 'Yeaahhhhhhh 😎' },  status: :accepted
  end
  
  def failure
    render json: { message: "That's a bad request there, friend 😭" }, status: :unauthorized
  end
end
