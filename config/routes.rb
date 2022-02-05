Rails.application.routes.draw do
  
  
  resources :players
  resources :teams
  resources :maps, only: [:index, :show]
  resources :characters, only: [:index, :show]
  

  #Custom Routes 
 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
