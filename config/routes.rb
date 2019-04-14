Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
     resources :users, only: [:index, :create, :destroy, :update]
     resources :sessions, only: [:create, :destroy]
    end 
  end 
  root "pages#index"
  match '*path', to:'pages#index', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
