class CreateDogs < ActiveRecord::Migration
  def change
    create_table :dogs do |t|
      t.string :name 
      t.integer :tail_length 
      t.integer :fluffiness 
      t.integer :birth_year
    end
  end
end
