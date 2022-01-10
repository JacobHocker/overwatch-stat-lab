class SupportsController < ApplicationController

    #GET /supports 
    def index 
        supports = Support.all.order(:name)
        render json: supports, status: :ok
    end
end
