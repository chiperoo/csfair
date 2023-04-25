require 'singleton'

class ProfessionsService
  include Singleton

  @professions_hash
  FILE_PATH = "professions.json"

  def add(profession)
    p = Profession.new(profession)

    if professions_hash.key?(p.title)
      professions_hash[p.title] = professions_hash[p.title] + 1
    else
      professions_hash[p.title] = 1
    end

    save
  end

  def display
    professions_hash.each_key do |key|
      p "#{key}: #{professions_hash[key]}"
    end
  end

  def display_cloud
    load_data

    display

    # colors of the word cloud
    colors = %w[#39B6E9 #303640 #EC5453 #37B375 #645187 #B8B24F #243F69 #1A2C47]

    # have default words here for display already
    words = [
      ['engineer', 1],
      ['designer', 2],
      ['teacher', 3],
      ['product manager', 2],
      ['musician', 1]

    ]
    professions_hash.each_pair do |k, v|
      words << [k, v]
    end

    cloud = MagicCloud::Cloud.new(words, rotate: :square, scale: :linear, palette: colors, font_family: 'Impact')
    img = cloud.draw(900.0, 500.0) #width, height
    img.write('test.png')
  end

  def save
    File.open(FILE_PATH, "w+") do |f|
      f << professions_hash.to_json
    end
  end

  def load_data
    @professions_hash = nil
    File.open(FILE_PATH) do |f|
      @professions_hash = JSON.parse(f.read)
    end
  end

  private

  def professions_hash
    @professions_hash ||= {}
  end
end
