class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_content, :game_mode, :group_size, :rank_one, :rank_two, :platform, :region, :require_mic, :roles, :likes, :user_id 
end
