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

ActiveRecord::Schema.define(version: 2022_03_10_013443) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

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

  create_table "comments", force: :cascade do |t|
    t.string "comment_content"
    t.bigint "post_id"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "maps", force: :cascade do |t|
    t.string "name"
    t.string "country"
    t.string "country_flag"
    t.string "map_type"
    t.string "map_type_icon"
    t.string "card"
    t.string "image_one"
    t.string "image_two"
    t.string "image_three"
    t.string "top_down"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.string "role"
    t.string "role_icon"
    t.bigint "team_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "post_content"
    t.string "game_mode"
    t.integer "group_size"
    t.string "rank_one"
    t.string "rank_two"
    t.string "platform"
    t.string "region"
    t.string "require_mic"
    t.string "roles"
    t.integer "likes"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "responses", force: :cascade do |t|
    t.string "response_content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "team_name"
    t.string "team_logo"
    t.string "team_city"
    t.string "team_skin_home"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "password_confirmation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "user_image_url"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "players", "teams"
end
