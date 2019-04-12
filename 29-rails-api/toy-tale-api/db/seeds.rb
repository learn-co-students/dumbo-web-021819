# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Toy.destroy_all

Toy.create(name: "Buzz Lightyear", image: "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png", likes: 3 )
Toy.create(name: "Mr. Potato Head",image: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217", likes: 3 )
Toy.create(name: "Slinky Dog", image: "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png", likes: 2 )
