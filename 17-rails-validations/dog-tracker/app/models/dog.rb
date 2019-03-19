class Dog < ApplicationRecord

  CAT_NAMES = ["Fluffy", "Martha", "Elliott", "Garfield"]

  validates :name, presence: true
  validates :tail_length, presence: true, numericality: { 
      less_than_or_equal_to: 12, 
      greater_than: 0 
    }


  validate :no_cat_names

  def no_cat_names
    if self.name && CAT_NAMES.map(&:downcase).include?(self.name.downcase)
      self.errors.add(:name, "can't be a cat name 🙅‍♂️😸")
    end
  end

  # validates(:name, { presence: true })


end