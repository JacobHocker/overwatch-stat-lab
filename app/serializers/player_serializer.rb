class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :role, :role_icon, :team_id 
end
