class DinosaursController < ApplicationController

  def index
    @dinosaurs = Dinosaur.all
    render :sdfsdf
  end

  def show
    @dinosaur = Dinosaur.find(params[:id])
    # render :show_dino
  end

end