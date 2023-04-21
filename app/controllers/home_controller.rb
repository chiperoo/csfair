class HomeController < ApplicationController
  protect_from_forgery with: :null_session

  def index
  end

  def submit
    profession = params[:profession]
    ProfessionsService.instance.add(profession)

    render plain: "OK"
  end

  def word_cloud
    ProfessionsService.instance.display_cloud
    send_file 'test.png', type: 'image/png', disposition: 'inline'
  end
end
