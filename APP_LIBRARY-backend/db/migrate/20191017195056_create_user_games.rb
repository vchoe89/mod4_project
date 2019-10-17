class CreateUserGames < ActiveRecord::Migration[6.0]
  def change
    create_table :user_games do |t|
      t.integer :user_id
      t.integer :game_id
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
