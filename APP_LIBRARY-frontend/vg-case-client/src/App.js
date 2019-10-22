import React from 'react';
import Details from './containers/Details'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Navbar from './containers/Navbar'
import MainContainer from './components/MainContainer';
import YourGames from './components/YourGames.js'
const URL = "http://localhost:3000/games"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allGames: [],
      usersGames: [],
      searchResult: ""
    }
  }

    componentDidMount() {
      fetch(URL)
      .then(r => r.json())
      .then(data => {
        this.setState({allGames: data})
      })
    }

    onChangeSearch = (event, {value}) => {
      this.setState({searchResult: value })
    }

    filterGames = () => {
    if (this.state.allGames.length !== 0){
      return this.state.allGames.filter(game =>
        game.title.toUpperCase().includes(this.state.searchResult.toUpperCase()))
    } else {
      return this.state.allGames
      }
    }

    addUserGames = (game) => {
      this.setState({usersGames: [...this.state.usersGames, game]})
    }

  render() {
    return (
      <div>
        <Navbar ViewUserGames={this.ViewUserGames} onChangeSearch={this.onChangeSearch}/>
        <Switch>
          <Route path='/games/:id' render={(props) => {
              let gameId = props.match.params.id
              let gameObj = this.state.allGames.find(game => game.id === gameId)
              return <Details game={gameObj} />
            }}/>
            {/* <Route /> */}
        </Switch>
      </div>
    )
  }
}

export default App;
