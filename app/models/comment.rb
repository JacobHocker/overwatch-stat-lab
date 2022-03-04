class Comment < ApplicationRecord
    belongs_to :post 
    belongs_to :user
    has_many :responses 

    validates :comment_content, presence: true, length: {minimum: 20, maximum: 350}
end
