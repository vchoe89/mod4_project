import React from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import MainContainer from './components/MainContainer';
import GameList from './components/GameList'
const URL = "http://localhost:3000/games"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allGames: []
    }
  }

    componentDidMount() {
      fetch(URL)
      .then(r => r.json())
      .then(data => {
        this.setState({allGames: data})
      })
    }
  

  render() {
    return (
      <div>
      <Navbar />
      <MainContainer games={this.state.allGames} />
      </div>
    )
  }
}

export default App;
