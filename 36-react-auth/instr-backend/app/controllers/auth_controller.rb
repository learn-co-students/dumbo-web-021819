class AuthController < ApplicationController

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      # Now we ensure that we send the token over the wire,
      # that this will be available for the frontend to set
      jwt = encode_token({user_id: @user.id})
      render json: { user: UserSerializer.new(@user), jwt: jwt }, status: :accepted
    end
  end

  # me
  def current_profile
    render json: {user: UserSerializer.new(current_user)}
  end
end
