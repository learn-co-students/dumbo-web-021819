
class Passenger

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def tickets
    Ticket.all.select do |ticket| 
      # binding.pry
      # ticket.passenger.name == self.name
      # ticket
      ticket.passenger == self
    end
  end

  def flights
    tickets.map do |ticket|
      ticket.flight
    end
  end

end