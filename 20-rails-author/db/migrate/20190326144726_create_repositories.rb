class CreateRepositories < ActiveRecord::Migration[5.1]
  def change
    create_table :repositories do |t|
      t.string :title
      t.string :description
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :repositories, :title, unique: true
  end
end
