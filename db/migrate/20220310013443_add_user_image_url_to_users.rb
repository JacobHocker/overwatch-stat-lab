class AddUserImageUrlToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :user_image_url, :string
  end
end
