class CreateModes < ActiveRecord::Migration[6.1]
  def change
    create_table :modes do |t|
      t.string :mode_name
      t.string :mode_icon

      t.timestamps
    end
  end
end
