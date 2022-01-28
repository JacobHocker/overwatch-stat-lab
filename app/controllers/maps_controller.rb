class MapsController < ApplicationController

    # GET /characters
    def index 
        maps = Map.all.order(:name)
        render json: maps, status: :ok
    end

    # GET /characters/:id
    def show 
        map = Map.find_by(id: params[:id])
        if map
            render json: map, status: :ok
        else   
            render json: :not_found
        end
    end
end
