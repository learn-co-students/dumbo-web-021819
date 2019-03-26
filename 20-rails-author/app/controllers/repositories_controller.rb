class RepositoriesController < ApplicationController
  before_action :authorized

  def index
  end
  def new
    @repository = Repository.new
    render :new
  end

  def create
    repository = Repository.new(repository_params)
    repository.user = current_user

    if repository.save
      redirect_to user_path(current_user)
    end
  end

  def destroy
    # DELETE /repositories/:id
    repo = Repository.find(params[:id])
    if current_user == repo.user
      repo.destroy
      redirect_to user_path(current_user)
    end
  end

  private
  def repository_params
    params.require(:repository).permit(:title, :description, :is_private)
  end
end
