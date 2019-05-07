  Rails.application.routes.draw do
  
    namespace :api do
      resources :contacts, only: [:create]
    end

    get '*other', to: 'static#index'
  end
