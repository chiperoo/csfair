require 'singleton'

class ProfessionsService
  include Singleton

  @professions_hash

  def add(profession)
    p = Profession.new(profession)

    if professions_hash.key?(p.title)
      professions_hash[p.title] = professions_hash[p.title] + 1
    else
      professions_hash[p.title] = 1
    end
  end

  def display
    professions_hash.each_key do |key|
      p "#{key} #{professions_hash[key]}"
    end
  end

  def display_cloud
    words = []
    professions_hash.each_pair do |k, v|
      words << [k, v]
    end

    cloud = MagicCloud::Cloud.new(words, rotate: :free, scale: :log)
    img = cloud.draw(960, 600) #default height/width
    img.write('test.png')
  end

  private

  def professions_hash
    @professions_hash ||= {}
  end
end
