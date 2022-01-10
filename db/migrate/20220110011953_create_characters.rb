class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :hero_card
      t.string :role_card

      t.timestamps
    end
  end
end
