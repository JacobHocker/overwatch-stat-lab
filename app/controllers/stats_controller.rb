require 'byebug'
require 'dotenv'
class StatsController < ApplicationController
    
    def get_complete 
        url = "https://ow-api.com/v1/stats/#{params[:platform]}/#{params[:region]}/#{params[:battletag]}/complete"
        response = HTTParty.get(url) 
        render json: response 
    end
     
    def get_profile 
        url = "https://ow-api.com/v1/stats/#{params[:platform]}/#{params[:region]}/#{params[:battletag]}/profile"
        response = HTTParty.get(url) 
        render json: response 
    end
end 