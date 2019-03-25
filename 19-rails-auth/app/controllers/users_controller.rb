class UsersController < ApplicationController
  before_action :authorized, except: [:new, :create]

  def new
    # GET /users/new
    @user = User.new
    render :new
  end

  def create
    byebug
    user = User.create(user_params)
    redirect_to user_path(user)
    # redirect_to user
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :display_name)
  end
end
