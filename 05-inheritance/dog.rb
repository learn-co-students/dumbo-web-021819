class Dog < Animal

  # def speak
  #   "Arf!"
  # end

  def initialize(name)
    super
    @sound = "Arf!"
  end

  def digest
    super
  end


end