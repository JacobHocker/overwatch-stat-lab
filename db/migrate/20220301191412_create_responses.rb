class CreateResponses < ActiveRecord::Migration[6.1]
  def change
    create_table :responses do |t|
      t.string :response_content
      t.belongs_to :comment
      t.belongs_to :user 

      t.timestamps
    end
  end
end
