class CreateDinosaurs < ActiveRecord::Migration[5.2]
  def change
    create_table :dinosaurs do |t|
      t.string :name
      t.integer :roar_volume
      t.integer :tail_length
      t.integer :height

      t.timestamps
    end
  end
end
