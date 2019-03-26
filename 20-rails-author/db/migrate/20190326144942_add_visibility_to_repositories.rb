class AddVisibilityToRepositories < ActiveRecord::Migration[5.1]
  def change
    add_column :repositories, :is_private, :boolean
  end
end
