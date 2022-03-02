class Post < ApplicationRecord
    belongs_to :user 
    has_many :comments
    has_many :responses, through: :comments
    
    validates :post_content, presence: true, length: {minimum: 20, maximum: 350}
end
