class Dog < ActiveRecord::Base

  has_many :legs

  def self.search(search_term)
    self.where("lower(name) like ?", "%#{ search_term }%")
  end

end







