class CreateBreeds < ActiveRecord::Migration[5.2]
  def change
    create_table :breeds do |t|
      t.string :name
      t.integer :feet_high_at_shoulder
      t.string :origin
    end
  end
end
