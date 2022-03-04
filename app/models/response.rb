class Response < ApplicationRecord
    belongs_to :comment 
    belongs_to :user

    validates :response_content, presence: true, length: {minimum: 20, maximum: 350}
end
