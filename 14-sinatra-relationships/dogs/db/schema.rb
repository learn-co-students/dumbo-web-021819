# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190314152212) do

  create_table "dogs", force: :cascade do |t|
    t.string  "name"
    t.integer "tail_length"
    t.integer "fluffiness"
    t.integer "birth_year"
  end

  create_table "legs", force: :cascade do |t|
    t.integer "dog_id"
    t.integer "length"
    t.integer "number_of_toes"
    t.boolean "front_leg"
    t.boolean "left_leg"
  end

end
