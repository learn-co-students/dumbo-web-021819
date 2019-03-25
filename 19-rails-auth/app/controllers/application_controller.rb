class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def authorized
    redirect_to login_path unless logged_in
  end

  def current_user
    if session[:user_id]
      @user = User.find(session[:user_id])
    end
  end


  def logged_in?
    !!current_user
    # if current_user != nil
    #   return true
    # else
    #   return false
    # end
    # if current_user return true else false
  end
end
