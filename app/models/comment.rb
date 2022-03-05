class Comment < ApplicationRecord
    belongs_to :post 
    belongs_to :user
     

    validates :comment_content, presence: true, length: {minimum: 10, maximum: 350}
end
