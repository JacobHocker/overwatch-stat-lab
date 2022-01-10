class DamagesController < ApplicationController

    #GET /damagess 
    def index 
        damages = Damage.all.order(:name)
        render :json damages, status: :ok
    end
end
