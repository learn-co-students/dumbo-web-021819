class Fish < Animal

  # def speak
  #   "Blub."
  # end

  def initialize(name)
    super
    @sound = "Blub."
  end

  def lay_eggs
    "Splort."
  end
  
end