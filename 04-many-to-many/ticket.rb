class Ticket

  attr_reader :passenger, :flight

  @@all = []

  def initialize(passenger, flight)
    @passenger = passenger
    @flight = flight
    @@all << self
  end

  def self.all
    @@all
  end

end