class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :response_content, :comment_id 
end
