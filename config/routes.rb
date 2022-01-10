Rails.application.routes.draw do
  
  
  resources :supports, only: [:index, :create]
  resources :tanks, only: [:index, :create]
  resources :damages, only: [:index, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
