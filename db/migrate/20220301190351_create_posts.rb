class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :post_content
      t.string :game_mode 
      t.integer :group_size 
      t.string :rank_one 
      t.string :rank_two
      t.string :platform 
      t.string :region
      t.string :require_mic 
      t.string :roles
      t.integer :likes 
      t.belongs_to :user 

      t.timestamps
    end
  end
end
