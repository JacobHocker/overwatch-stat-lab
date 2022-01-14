class CharactersController < ApplicationController

    # GET /characters
    def index 
        characters = Character.all.order(:name)
        render json: characters, status: :ok
    end

    # GET /characters/:id
    def show 
        character = Character.find_by(id: params[:id])
        if character
            render json: character, status: :ok
        else   
            render json: :not_found
        end
    end

    ###CUSTOM ROUTES###
    
end
