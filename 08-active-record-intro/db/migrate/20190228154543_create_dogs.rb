class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :tail_length 
      t.integer :breed_id
      t.integer(:birth_year)
    end
  end
end
