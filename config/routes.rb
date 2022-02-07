Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :yelp_search, only: [:index]
    resources :maps, only: [:index]
  end

  root "homes#index"
  get "*path", to: "homes#index"
end
