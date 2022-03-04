Rails.application.routes.draw do
  
  
  resources :responses
  resources :comments
  resources :posts
  get '/complete/:platform/:region/:battletag', to: "stats#get_complete"
  get '/profile/:platform/:region/:battletag', to: "stats#get_profile"
  resources :players, only: [:index, :show]
  resources :teams, only: [:index, :show]
  resources :maps, only: [:index, :show]
  resources :characters, only: [:index, :show]
  
  get "/users/:id", to: "users#general_show"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  #Custom Routes 
 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
