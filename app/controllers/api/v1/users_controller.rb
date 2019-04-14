class Api::V1::UsersController < ApplicationController
    def index
      render json: User.all
    end
  
    def create
      user = User.find_by_username(params[:username])
      token = nil
      if user == nil
        new_user = User.create(user_params)
        if new_user != nil
          success = true
          message = "User registered."
          token = new_user
        else
          success = false
          message = "Problem while registering user."
        end
      else
        success = false
        message = "User already exists"
      end
      render json: {success: success, message: message, token: token}
    end
  
    def destroy
      User.destroy(params[:username])
    end
  
    def update
      user = User.find(params[:username])
      user.update_attributes(user_params)
      render json: user
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username, :email, :password, :enable_notifications, :firstname,
        :lastname, :token, :is_active, :is_staff)
    end
  end
