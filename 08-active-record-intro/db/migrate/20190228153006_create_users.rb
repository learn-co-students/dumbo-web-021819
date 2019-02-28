class CreateUsers < ActiveRecord::Migration[5.2]

  def change
    #users table definition goes here
    create_table :users do |t|
      t.string :name
      t.integer :birth_year
      t.string :eye_color
      t.timestamps
    end
  end

end
