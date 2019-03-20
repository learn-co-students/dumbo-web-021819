# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Dog.create!(name: "Clifford", tail_length: rand(1..10), color_hexadecimal: "#f00")
Dog.create!(name: "Balto", tail_length: rand(1..10))
Dog.create!(name: "Snoopy", tail_length: rand(1..10))
Dog.create!(name: "Chance", tail_length: rand(1..10)) # Homeward Bound (1993)
Dog.create!(name: "Pluto", tail_length: rand(1..10))
Dog.create!(name: "Scooby-doo", tail_length: rand(1..10))


Park.create!(name: "Central Park")
Park.create!(name: "Prospect Park")
Park.create!(name: "Pawnee Park")
Park.create!(name: "Maria Hernandez Park")
Park.create!(name: "Big Park")
Park.create!(name: "Bryant Park")


