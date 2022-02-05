class TeamSerializer < ActiveModel::Serializer
  attributes :id, :team_name, :team_logo, :team_city, :team_skin_home
end
