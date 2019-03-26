class UsersController < ApplicationController
  before_action :authorized, except: [:new, :create]

  def new
    # GET /users/new
    @user = User.new
    render :new
  end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      redirect_to user_path(user)
    end
  end

  def show
    @user = User.find(params[:id])
    if @user != current_user
      @repositories = @user.repositories.where(is_private: false)
    else
      @repositories = @user.repositories
    end
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :display_name)
  end
end
