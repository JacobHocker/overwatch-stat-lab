class Post < ApplicationRecord
    belongs_to :user 
    has_many :comments
    has_many :users, through: :comments
    
    validates :post_content, presence: true, length: {minimum: 10, maximum: 350}
end
