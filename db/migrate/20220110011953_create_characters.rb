class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name 
      t.string :hero_card
      t.string :role 
      t.string :role_card
      t.string :name_two 
      t.integer :age 
      t.string :occupation
      t.string :base_of_operation
      t.string :affiliation
      t.string :hero_story
      t.string :hero_image_one
      t.string :hero_image_two
      t.string :hero_gameplay_video
      t.string :hero_gameplay_description
      t.integer :hp
      t.integer :armor
      t.integer :shields
      t.integer :total_hp
      t.string :playstyle 
      t.integer :hero_difficulty
      t.string :weapon_one_image
      t.string :weapon_one_name 
      t.string :weapon_one_type 
      t.string :weapon_one_description
      t.string :weapon_two_image
      t.string :weapon_two_name 
      t.string :weapon_two_type
      t.string :weapon_two_description
      t.string :passive_image
      t.string :passive_name 
      t.string :passive_description 
      t.string :ability_one_image  
      t.string :ability_one_name 
      t.string :ability_one_description
      t.string :ability_two_image 
      t.string :ability_two_name 
      t.string :ability_two_description
      t.string :ability_three_image 
      t.string :ability_three_name 
      t.string :ability_three_description
      t.string :ultimate_image
      t.string :ultimate_name 
      t.string :ultimate_description 
      t.string :healing_type 
      t.boolean :barrier 
      t.integer :barrier_health
     
    end
  end
end
