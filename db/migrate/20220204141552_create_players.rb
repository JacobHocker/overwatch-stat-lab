class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :role
      t.string :role_icon
      t.belongs_to :team, foreign_key: true

      t.timestamps
    end
  end
end
