class Gallery

  attr_reader :name, :city
  @@all = []

  def initialize(name, city)
    @name = name
    @city = city
    @@all << self
  end


  def self.all
    @@all
  end

  def paintings
    Painting.all.select do |painting|
      painting.gallery == self
    end
  end

  def artists
    paintings.map { |painting| painting.artist }
  end

  def artist_names
    artists.map {|artist| artist.name}
  end

  def most_expensive_painting
    #   * Returns an `instance` of the most expensive painting in a gallery
    paintings.max_by {|painting| painting.price}
  end

end
