class Cat < Animal

  attr_reader :num_lives

  def initialize(name, owner)
    super(name)
    @num_lives = 9
    @sound = "Miau!"

  end

  # def speak
  #   "Miau!"
  # end

  #method overriding
  def die
    @num_lives -= 1
    # super_return_value = super
    "mrouuu#{ super }"
  end

end