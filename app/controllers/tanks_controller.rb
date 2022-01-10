class TanksController < ApplicationController

    #GET /tanks 
    def index 
        tanks = Tank.all.order(:name)
        render :json tanks, status: :ok
    end

    
end
