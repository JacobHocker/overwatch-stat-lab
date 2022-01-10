class CharactersController < ApplicationController

    # GET /characters
    def index 
        characters = Character.all.order(:name)
        render json: characters, status: :ok
    end
end
