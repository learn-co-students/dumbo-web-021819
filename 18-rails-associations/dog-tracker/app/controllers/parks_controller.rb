class ParksController < ApplicationController
  
  before_action :get_park, only: [:show]

  def index
    @parks = Park.all
  end

  def show
  end


  private

  def get_park
    @park = Park.find(params[:id])
  end

end
