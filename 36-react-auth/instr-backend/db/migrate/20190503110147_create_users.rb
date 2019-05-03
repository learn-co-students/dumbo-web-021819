class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :title
      t.string :display_name
      t.string :email
      t.string :bio
      t.string :password_digest

      t.timestamps
    end
  end
end
