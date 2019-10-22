import React from 'react';
import Game from '../containers/Game'
import { Card } from 'semantic-ui-react'


class YourGames extends React.Component {

    render() {
        return (
          <Card.Group>
            { this.props.userGames === undefined ?
              <h1>Your Game Library is Empty! </h1>
              :
              this.props.userGames.map(game => {
              return <YourGames userGame={game} />
                })
            }
          </Card.Group>
        )
    }
}


export default YourGames;
