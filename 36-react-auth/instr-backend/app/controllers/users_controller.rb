class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  # Logic for Sign Up
  def create

  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)

    render json: @user
  end

  private
  def user_params
    params.permit(:title, :display_name, :email, :bio, :password, :password_confirmation)
  end
end
