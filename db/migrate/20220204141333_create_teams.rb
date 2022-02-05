class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :team_name
      t.string :team_logo
      t.string :team_city
      t.string :team_skin_home
      

      t.timestamps
    end
  end
end
