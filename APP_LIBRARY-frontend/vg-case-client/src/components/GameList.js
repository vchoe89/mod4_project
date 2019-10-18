import React from 'react';
import MainContainer from './MainContainer'
import Game from '../containers/Game'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import Details from '../containers/Details'


class GameList extends React.Component {
    constructor(){
        super()
        this.state = {
            currentGame: [],
            showDetails: false
        }
    }

    onChangeDetails = (game) => {
        this.setState({showDetails: !this.state.showDetails})
        
    }
    render() {
        return (
            <div>
                <Card.Group>
                {this.props.games.map(game => {
                    return <Game game={game} onChangeDetails={this.onChangeDetails} showDetails={this.state.showDetails} />
                })}
                </Card.Group>
            </div>
        )
    }
}


export default GameList;