Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # Creating a user
  resources :users, only: [:new, :create, :show]
  resources :repositories, only: [:new, :create, :destroy]
  # get "/users/:id", to: "users#show", as: "user"

  # Logging in

  get "/sessions/new", to: "sessions#new", as: "login" #login_path
  delete "/sessions", to: "sessions#destroy"
  get "/login", to: "sessions#new"
  post "/sessions", to: "sessions#create"
end
