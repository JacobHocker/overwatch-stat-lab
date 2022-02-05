class TeamsController < ApplicationController
    
    # GET /teams
    def index 
        teams = Team.all.order(:team_name)
        render json: teams, status: :ok
    end

    # GET /teams/:id
    def show 
        team = Team.find_by(id: params[:id])
        if team
            render :json => team.to_json( :include => [:players] )
        else   
            render json: :not_found
        end
    end
end
