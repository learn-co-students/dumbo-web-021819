class Tweet

  attr_reader :body, :author

  @@all_tweets = []

  def initialize(new_tweet_body, author)
    @body = new_tweet_body
    @author = author
    @@all_tweets << self
  end

  def self.all
    @@all_tweets
  end

end