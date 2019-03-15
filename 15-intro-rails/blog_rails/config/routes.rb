Rails.application.routes.draw do
  # resources :articles
  # resources :dogs
  # resources(:dinosaurs, { only: [ :index, :show ] })
  resources :dinosaurs, only: [ :index, :show ]

  # get "/🦕🦖", to: "dinosaurs#index", as: "dinosaurs"
  # get "/🦕🦖/:id", to: "dinosaurs#show", as: "dinosaur"

  # get "/dinosaurs", to: "dinosaurs#potatoes"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
