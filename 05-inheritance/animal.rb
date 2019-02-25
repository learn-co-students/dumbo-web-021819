class Animal

  attr_reader :name

  def initialize(name)
    # binding.pry
    @name = name

  end

  def die
    "urrrrrrrrk."
  end


  def speak_loudly
    speak.upcase
  end

  def speak
    @sound * 5
  end

  private

  def digest
    "lurch"
  end

end