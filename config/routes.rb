Rails.application.routes.draw do
  
  get '/player/:platform/:region/:battletag', to: "stats#get_stats"
  resources :players, only: [:index, :show]
  resources :teams, only: [:index, :show]
  resources :maps, only: [:index, :show]
  resources :characters, only: [:index, :show]
  

  #Custom Routes 
 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
