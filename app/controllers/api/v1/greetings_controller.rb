class Api::V1::GreetingsController < ApplicationController
  def index
    greeting = Greeting.offset(rand(Greeting.count)).first
    render json: greeting
  end
end
