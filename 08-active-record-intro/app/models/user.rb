class User < ActiveRecord::Base

  def age
    Time.new.year - self.birth_year
  end

end

