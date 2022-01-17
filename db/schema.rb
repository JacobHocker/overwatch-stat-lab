# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_10_011953) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "hero_card"
    t.string "role"
    t.string "role_card"
    t.string "name_two"
    t.integer "age"
    t.string "occupation"
    t.string "base_of_operation"
    t.string "affiliation"
    t.string "hero_story"
    t.string "hero_image_one"
    t.string "hero_image_two"
    t.string "hero_gameplay_video"
    t.string "hero_gameplay_description"
    t.integer "hp"
    t.integer "armor"
    t.integer "shields"
    t.integer "total_hp"
    t.string "playstyle"
    t.integer "hero_difficulty"
    t.string "weapon_one_image"
    t.string "weapon_one_name"
    t.string "weapon_one_type"
    t.string "weapon_one_description"
    t.string "weapon_two_image"
    t.string "weapon_two_name"
    t.string "weapon_two_type"
    t.string "weapon_two_description"
    t.string "passive_image"
    t.string "passive_name"
    t.string "passive_description"
    t.string "ability_one_image"
    t.string "ability_one_name"
    t.string "ability_one_description"
    t.string "ability_two_image"
    t.string "ability_two_name"
    t.string "ability_two_description"
    t.string "ability_three_image"
    t.string "ability_three_name"
    t.string "ability_three_description"
    t.string "ultimate_image"
    t.string "ultimate_name"
    t.string "ultimate_description"
    t.string "healing_type"
    t.boolean "barrier"
    t.integer "barrier_health"
  end

end
