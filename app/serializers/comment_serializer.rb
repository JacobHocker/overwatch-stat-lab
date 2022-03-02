class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_content, :post_id 
end
