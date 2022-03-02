class PostsController < ApplicationController
    #GET /POSTS
    def index 
        posts = Post.all.order(:created_at)
        render json: posts 
    end


    private 
    def post_params 
        params.permit(:post_content, :user_id)
    end
end
