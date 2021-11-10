# frozen_string_literal: true

module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        greeting = Greeting.offset(rand(Greeting.count)).first
        render json: greeting
      end
    end
  end
end
