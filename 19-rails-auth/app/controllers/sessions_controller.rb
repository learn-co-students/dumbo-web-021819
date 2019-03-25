class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    # byebug
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    end
  end
end
