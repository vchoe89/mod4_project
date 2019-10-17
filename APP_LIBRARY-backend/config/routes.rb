Rails.application.routes.draw do
  resources :all_games
  resources :your_games
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
