class Api::V1::SessionsController < ApplicationController
  
    def create
        user = User.find_by_username(params[:username])
        success = false
        message = ""
        token = nil
        if user && user["password"] == params[:password]
            message = "Login Successfull"
            success = true
            token = user
        else
            message = "Username or password is invalid"
            success = false
        end
        render json: {success: success, message: message, token: token}
    end
    
    # def destroy
    #     session[:user_id] = nil
    # end
end
