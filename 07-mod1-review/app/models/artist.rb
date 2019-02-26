class Artist

  attr_reader :name, :years_experience

  @@all = []

  def initialize(name, years_experience)
    @name = name
    @years_experience = years_experience
    @@all << self
  end


  def self.all
    @@all
  end

  def paintings
    Painting.all.select do |painting|
      painting.artist == self
    end
  end

  def galleries
    paintings.map {|painting| painting.gallery }
  end

  def self.total_experience
    #   * Returns an `integer` that is the total years of experience of all artists
    #
    #
    # total = 0
    #
    # self.all.each do |artist|
    #   total = total + artist.years_experience
    # end
    # total

    # years = self.all.map { |artist| artist.years_experience }
    # years.sum
    # years.inject(:+)
    # Same using a block and inject
        # (5..10).inject { |sum, n| sum + n }
    self.all.reduce(0) {|sum, artist| sum + artist.years_experience}



    
  end



  # * `Artist#cities`
  #   * Return an `array` of all cities that an artist has paintings in
  #
  # * `Artist.total_experience`
  #
  # * `Artist.most_prolific`
  #   * Returns an `instance` of the artist with the highest amount of paintings per year of experience.
  #
  # * `Artist#create_painting`
  #   * Given the arguments of `title`, `price` and `gallery`, creates a new painting belonging to that artist


end
