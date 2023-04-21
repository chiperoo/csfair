Rails.application.routes.draw do
  root :to => "home#index"

  post 'profession/submit', to: "home#submit"

  get 'profession/word_cloud', to: "home#word_cloud"
end
