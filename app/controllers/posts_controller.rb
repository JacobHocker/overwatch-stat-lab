class PostsController < ApplicationController
    #GET /posts
    def index 
        posts = Post.all.order(created_at: :desc)
        render :json => posts.to_json( :include => [:comments, :user] )
    end

    #POST /posts
    def create 
        post = Post.create(post_params)
        render json: post, status: :created
    end

    #PATCH LIKES /posts/:id
    def add_likes 
        post = Post.find_by(id: params[:id])
        if post 
            post.update(likes: post.likes + 1)
            render json: post 
        else   
            render json: { error: "Post Not Found" }, status: :not_found
        end
    end

    # PATCH /post/:id
    def update 
        post = Post.find_by(id: params[:id])
        if post 
            post.update(post_params)
            render json: post 
        else   
            render json: { error: "Post Not Found" }, status: :not_found
        end
    end

    #DELETE /posts/:id
    def destroy 
        post = Post.find_by(id: params[:id])
        if post 
            post.destroy 
            head :no_content
        else  
            render json: { error: "Post Not Found" }, status: :not_found
        end
    end


    private 
    def post_params 
        params.permit(:post_content,:game_mode, :group_size, :rank_one, :rank_two, :platform, :region, :require_mic, :roles, :likes, :user_id)
    end
end
