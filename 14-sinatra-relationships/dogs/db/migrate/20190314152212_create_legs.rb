class CreateLegs < ActiveRecord::Migration
  def change
    create_table :legs do |t|
      t.integer :dog_id
      t.integer :length
      t.integer :number_of_toes
      t.boolean :front_leg
      t.boolean :left_leg
    end
  end
end
