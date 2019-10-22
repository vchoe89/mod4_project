import React from 'react';
import GameList from './GameList'
import Details from '../containers/Details'

class MainContainer extends React.Component {
  constructor(){
      super()
      this.state = {
          currentGame: {},
          showDetails: false,
          searchResult: ""
      }
  }

  onChangeDetails = (game) => {
      this.setState({showDetails: !this.state.showDetails, currentGame: game})
  }




    render() {
        return (
          <React.Fragment>
            {this.state.showDetails === false ?
              <div>
                <GameList games={this.props.games} currentGame={this.state.currentGame}                       showDetails={this.state.showDetails} onChangeDetails={this.onChangeDetails}/>
              </div>
              :
              <Details game={this.state.currentGame} addUserGames={this.props.addUserGames} onChangeDetails={this.onChangeDetails}/>
            }
          </React.Fragment>
        )
    }
}

export default MainContainer;
