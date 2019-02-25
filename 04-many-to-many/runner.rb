require_relative 'flight'
require_relative 'passenger'
require_relative 'ticket'
require 'pry'


la_flight = Flight.new("UA 263 LGA-LAX")
manchester = Flight.new("Spirit JFK-MAC")
hotlanta = Flight.new("Southwest EWR-ATL")
philly = Flight.new("JetBlue ORD-PHL")


graham = Passenger.new("Graham")
ayana = Passenger.new("Ayana")
may = Passenger.new("May")
will = Passenger.new("Will")
matthew = Passenger.new("Matthew")
jaela = Passenger.new("Jaela")
ashley = Passenger.new("Ashley")

Ticket.new(graham, philly)
Ticket.new(ayana, la_flight)
Ticket.new(ayana, hotlanta)
Ticket.new(may, manchester)


# p Flight.all
p ayana.flights
# p ayana.tickets








