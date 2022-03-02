class Comment < ApplicationRecord
    belongs_to :post 
    has_many :responses 

    validates :comment_content, presence: true, length: {minimum: 20, maximum: 350}
end
