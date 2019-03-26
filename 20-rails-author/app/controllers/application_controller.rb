class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :logged_in?, :current_user

  def authorized
    redirect_to login_path unless logged_in?
  end

  def current_user
    if session[:user_id]
      current_user = User.find(session[:user_id])
    end
  end


  def logged_in?
    !!current_user
    # return either true or false
    # converts things that are truthy to true
    # converts things that are false to false

    # if current_user != nil
    #   return true
    # else
    #   return false
    # end
    # if current_user return true else false
  end
end
