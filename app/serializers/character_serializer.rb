class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :hero_card, :role_card
end
