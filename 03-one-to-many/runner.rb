require_relative 'user'
require_relative 'tweet'

coffee_dad = User.new("coffee_dad")
ariana_grande = User.new("ariana.grande")


# p coffee_dad.username
# p coffee_dad.username_with_at


# p coffee_dad.tweets
# coffee_dad.username = "cute_pets"


coffee_dad.post_tweet("Having Coffee")
coffee_dad.post_tweet("Drinking Coffee")
coffee_dad.post_tweet("The soul of humanity is dying")
coffee_dad.post_tweet("I love colombian roast")

Tweet.new("7 rings", ariana_grande)

ariana_grande.post_tweet("Thank u, next")
# coffee_dad.add_tweet(Tweet.new("Whatever"))

# p coffee_dad.tweets.count
# p ariana_grande.tweets.count

# Tweet.all.each do |tweet_instance|
#   p tweet_instance.author.username
# end

# p "_----------"

# ariana_grande.tweets.each do |tweet_instance|
#   p tweet_instance.author.username
# endk

p ariana_grande.tweets

# p Tweet.all.first.author.tweets.first.author.tweets.first
