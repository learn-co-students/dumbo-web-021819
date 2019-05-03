class AuthController < ApplicationController

  def create
    # Not quite secure yet because we aren't using our token
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      render json: { user: UserSerializer.new(@user) }, status: :accepted
    end
  end

end
