class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :front_cover
      t.string :back_cover
      t.integer :rating
      t.string :screenshot
      t.string :video_url
      t.string :description
      t.string :system

      t.timestamps
    end
  end
end
