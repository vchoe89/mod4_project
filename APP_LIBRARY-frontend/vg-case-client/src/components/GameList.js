import React from 'react';
import Game from '../containers/Game'
import { Card } from 'semantic-ui-react'


class GameList extends React.Component {

    render() {
        return (
          <Card.Group>
            {this.props.games.map(game => {
              return <Game game={game} currentGame={this.props.currentGame} onChangeDetails={this.props.onChangeDetails} showDetails={this.props.showDetails} />
                })
            }
          </Card.Group>
        )
    }
}


export default GameList;
