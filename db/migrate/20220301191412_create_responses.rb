class CreateResponses < ActiveRecord::Migration[6.1]
    def change
      create_table :respnses do |t|
        t.string :response_content
  
        t.timestamps
      end
    end
  end