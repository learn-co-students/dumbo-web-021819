require_relative 'bank_account'



ginger_account = BankAccount.new("Geri Halliwell", 9_000)

posh_account = BankAccount.new("Victoria Adams", 100_000)

# p ginger_account
# p posh_account

# puts ginger_account.name

# p posh_account.name
posh_account.name = "Victoria Beckham"
# p posh_account.name

# posh_account.withdraw(100)
# p posh_account.balance
posh_account.withdraw 100
# p posh_account.balance
posh_account.deposit(100_000)
# p posh_account.balance


p BankAccount.all


# BankAccount.total_number_of_bank_accounts

# ginger_spice_bank_account = {
#   name: "Geri Halliwell",
#   balance_usd: 9_000
# }

# posh_spice_bank_account = {
#   account_holder_name: "Victoria Adams",
#   balance: 100_000
# }

# def win_the_lottery(spice_girl)
#   spice_girl[:balance] += 1_000_000
#   puts "#{ spice_girl[:name] } won the lottery!"
# end

# win_the_lottery(posh_spice_bank_account)

