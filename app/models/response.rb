class Response < ApplicationRecord
    belongs_to :comment 

    validates :response_content, presence: true, length: {minimum: 20, maximum: 350}
end
