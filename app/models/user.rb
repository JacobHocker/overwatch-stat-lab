class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    has_many :user_posts, class_name: "Post", foreign_key: "user_id"
    

    

    validates :username, presence: true, uniqueness: true 
    validates :password, presence: true, length: {minimum:4, maximum:14}
    validates :password_confirmation, presence: true, length: {minimum:4, maximum:14}
end
