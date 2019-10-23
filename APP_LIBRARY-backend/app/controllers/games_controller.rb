class GamesController < ApplicationController
    def index
        render json: Game.all
    end
    
    def create
        game = Game.create(game_params)
        render json: game
    end

    def update

    end

    def edit

    end

    def destroy
        
    end

    private

    def game_params
        params.require(:game).permit(:id, :title, :front_cover, :back_cover, :rating, :screenshot, :video_url, :description, :system)
    end
end
