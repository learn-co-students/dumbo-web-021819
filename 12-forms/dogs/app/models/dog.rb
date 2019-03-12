class Dog < ActiveRecord::Base

  def self.search(search_term)
    self.where("lower(name) = ?", search_term)
  end

end


