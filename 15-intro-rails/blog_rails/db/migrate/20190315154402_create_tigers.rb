class CreateTigers < ActiveRecord::Migration[5.2]
  def change
    create_table :tigers do |t|
      t.string :name
      t.integer :roar_volume
      t.integer :tail_length
      t.integer :height

      t.timestamps
    end
  end
end
