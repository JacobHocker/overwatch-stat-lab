class PlayersController < ApplicationController
     # GET /players
     def index 
        players = Player.all.order(:name)
        render json: player, status: :ok
    end

end
