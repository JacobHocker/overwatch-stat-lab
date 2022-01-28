class CreateMaps < ActiveRecord::Migration[6.1]
  def change
    create_table :maps do |t|
      t.string :name
      t.string :country
      t.string :country_flag
      t.string :map_type
      t.string :map_type_icon
      t.string :card
      t.string :image_one
      t.string :image_two
      t.string :image_three
      t.string :top_down

      t.timestamps
    end
  end
end
