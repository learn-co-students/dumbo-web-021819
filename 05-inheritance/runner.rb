require_relative "animal"
require_relative "fish"
require_relative "dog"
require_relative "cat"
require "pry"


dory = Fish.new("Dory")
gwyn = Dog.new("Gwyn")
bob = Cat.new("Bob", "Leo")
elliott = Cat.new("Elliott", "Graham")

animal = Animal.new("Potato")

binding.pry

# p dory.die
# p elliott.die


# p dory.name
# p elliott.name

# p elliott.num_lives

# p elliott.speak_loudly
# p dory.speak_loudly
# p bob.speak_loudly
p gwyn.digest

# binding.pry

# false

