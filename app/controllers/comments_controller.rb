class CommentsController < ApplicationController
     #GET /comments
     def index 
        comments = Comment.all.order(:created_at)
        render :json => comments.to_json( :include => [:responses, :user] )
    end

    #POST /comments
    def create 
        comment = Comment.create(comment_params)
        render json: comment, status: :created
    end

    # PATCH /comments/:id
    def update 
        comment = Comment.find_by(id: params[:id])
        if comment 
            comment.update(params[:comment_content])
            render json:  comment
        else   
            render json: { error: "Comment Not Found" }, status: :not_found
        end
    end

    #DELETE /comments/:id
    def destroy 
        comment = Comment.find_by(id: params[:id])
        if comment 
            comment.destroy 
            head :no_content
        else  
            render json: { error: "Comment Not Found" }, status: :not_found
        end
    end


    private 
    def comment_params 
        params.permit(:comment_content, :post_id)
    end
end
