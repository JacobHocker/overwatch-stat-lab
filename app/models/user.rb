class User < ApplicationRecord
    has_one_attached :user_image 
    has_many :posts
    has_many :comments, through: :posts 
    #has_secure_password 
    

    validates :username, presence: true, uniqueness: true 
    validates :password, presence: true, length: {minimum:4, maximum:14}
    validates :password_confirmation, presence: true, length: {minimum:4, maximum:14}
end
