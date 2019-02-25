class Flight

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def passenger_manifest
    # take Ticket.all
    # iterate using .select to get the tickets for this flight
    # .map through the list of tickets and get the passengers
  end

end