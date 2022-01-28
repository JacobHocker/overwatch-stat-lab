class MapSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :country_flag, :map_type, :map_type_icon, :card, :image_one, :image_two, :image_three, :top_down
end
