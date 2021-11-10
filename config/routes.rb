Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      get 'greetings', to: 'greetings#index'
    end
  end
  # get '/*path' => 'homepage#index'
end
