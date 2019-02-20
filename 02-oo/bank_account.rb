class BankAccount

  # attr_reader :name, :balance
  # attr_writer :name

  attr_accessor :name
  attr_reader :balance

  # @@total_number_of_bank_accounts = 0
  @@all = []

  def initialize(name, balance)
    @name = name
    @balance = balance
    # @@total_number_of_bank_accounts += 1

    @@all << self
    # p @@all
    # p @@total_number_of_bank_accounts
  end

  def withdraw(amount)
    # @balance = @balance - amount
    @balance -= amount
  end

  def deposit(amount)
    # @balance = @balance + amount
    @balance += amount
  end

  def self.all
    @@all
  end

  def self.millionaires
    
  end

  # def self.total_number_of_bank_accounts
  #   @@total_number_of_bank_accounts
  # end

  # def balance
  #   @balance
  # end

  # def name
  #   @name
  # end

  # def name=(new_name)
  #   @name = new_name
  # end

  # def balance=(new_balance)
  #   @balance = new_balance
  # end

end

