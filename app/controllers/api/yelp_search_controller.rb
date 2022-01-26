class Api::YelpSearchController < ApplicationController

    def index
        render json: YelpSearch.search(params)
    end

end