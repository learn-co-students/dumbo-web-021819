Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/success', to: 'test#success'
  get '/failure', to: 'test#failure'
end
