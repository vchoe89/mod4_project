import React from 'react';
import GameList from './GameList'
import Details from '../containers/Details'

class MainContainer extends React.Component {
    render() {
        return (
            <div>
                <GameList games={this.props.games} />
            </div>
        )
    }
}


export default MainContainer;