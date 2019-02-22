class ApplicationController < ActionController::Base
  helper_method :logged_in?, :current_user
  
  def logged_in?
    !!current_user
  end
  
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    @current_user = user
    session[:session_token] = current_user.reset_session_token!
  end

  def logout!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end
end
