require_relative '../config/environment.rb'

marcus = Artist.new("Marcus", 30)
matthew = Artist.new("Matthew", 1)
matt = Artist.new("Matthew", 1)

merediths_place = Gallery.new("Merediths Place", "New Orleans")
chez_josh = Gallery.new("Chez Josh", "NYC")


shrug = Painting.new("shrug", 10000, marcus, merediths_place)
mojave = Painting.new("mojave", 12, matthew, merediths_place)
dinosaurs = Painting.new("some dinosaurs", 10, matt, chez_josh)
more_dinosaurs = Painting.new("more dinosaurs", 11, matt, chez_josh)


binding.pry

puts "Bob Ross rules."
