class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_content, :user_id 
end
