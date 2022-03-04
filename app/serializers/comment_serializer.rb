class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_content, :post_id, :user_id  
end
