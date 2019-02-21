class User

  attr_reader :username, :tweets

  def initialize(username)
    @username = username
  end

  def username_with_at
    "@#{ @username }"
  end

  def post_tweet(new_tweet_body)
    new_tweet = Tweet.new(new_tweet_body, self)
    # add_tweet(new_tweet)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.author == self
    end
  end

  # private

  # # def add_tweet(new_tweet)
  # #   @tweets << new_tweet
  # # end

  # def other_private_method

  # end

end