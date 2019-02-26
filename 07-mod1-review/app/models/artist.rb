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

  def cities
    galleries.map {|gallery| gallery.city}
  end

  def create_painting(title, price, gallery)
    Painting.new(title, price, self, gallery)
  end

  def self.total_experience

    total = 0

    self.all.each do |artist|
      total = total + artist.years_experience
    end
    total

    # Alternate approach:
    # self.all.reduce(0) {|sum, artist| sum + artist.years_experience}

  end

  def paintings_per_year
    # HELPER METHOD FOR MOST PROLIFIC
    # returns the number of paintings per the artist's years of experience
    self.paintings.length / self.years_experience
  end

  def self.most_prolific
    #   * Returns an `instance` of the artist with the highest amount of paintings per year of experience.
    self.all.max_by {|artist| artist.paintings_per_year}
  end


end
