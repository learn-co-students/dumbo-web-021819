class VisitsController < ApplicationController

  def new
    get_form_stuff
    @visit = Visit.new
  end

  def create
    @visit = Visit.create(visit_params)
    if @visit.valid?
      redirect_to @visit.dog
    else
      get_form_stuff
      render :new
    end
  end

  private

  def get_form_stuff
    @all_dogs = Dog.all
    @all_parks = Park.all
  end

  def visit_params
    params.require(:visit).permit(:dog_id, :park_id)
  end
end