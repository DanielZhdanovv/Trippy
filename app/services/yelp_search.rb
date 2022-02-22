class YelpSearch
    
    BASE_URL = "https://api.yelp.com/v3/"
    API_KEY = ENV['API_KEY']

    def self.search(params)
        # return params
        url = "#{BASE_URL}businesses/search"
        parameters = {
            location: params["location"],
            offset: 0
        }

        return JSON.parse(HTTP.auth("Bearer #{API_KEY}").get(url, params: parameters).body)
    end

end