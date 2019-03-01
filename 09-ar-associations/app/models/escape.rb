class Escape < ActiveRecord::Base

  belongs_to :animal
  belongs_to :zoo
    
  # belongs_to(:escaped_animal, { foreign_key: :animal_id, class_name: "Animal" })

  # def animal
  #   Animal.find(self.animal_id)
  # end


end