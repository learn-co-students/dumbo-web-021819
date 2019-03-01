class Animal < ActiveRecord::Base
  # def escapes
  #   Escape.where(animal_id: self.id)
  # end

  has_many :escapes

  # has_many(:zoos, { through: :escapes })
  has_many :zoos, through: :escapes



end