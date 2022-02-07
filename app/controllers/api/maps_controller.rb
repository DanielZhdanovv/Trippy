class Api::MapsController < ApplicationController

    def index
        render json: {key: ENV["MAPS_KEY"]}
    end

end