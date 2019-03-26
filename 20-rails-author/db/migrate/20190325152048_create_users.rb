class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      # email
      t.string :email
      # display_name
      t.string :display_name
      # password
      t.string :password_digest
      t.timestamps
    end
  end
end
