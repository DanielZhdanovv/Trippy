class Api::PlacesController < ApplicationController

  def index
    place = Place.find_by(id: params[:id])
    render json: place
  end

end