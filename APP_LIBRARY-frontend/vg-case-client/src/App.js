// import ReactDOM from 'react-dom';
// import GameList from './components/GameList';
// import YourGames from './components/YourGames';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Details from './containers/Details'
import Login from './components/Login'
import Navbar from './containers/Navbar';
import MainContainer from './components/MainContainer';
import GameForm from './components/GameForm';

const URL = "http://localhost:3000/games";

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

      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/allgames' exact render={() => {return <MainContainer games={this.state.allGames}/>}}/>

            <Route path='/addgame' exact component={GameForm} />

            <Route path='/games/:id' render={(props) => {
              let gameId = props.match.params.id
              let gameObj = this.state.allGames.find(game => game.id === gameId)
              return <Details game={gameObj}/>
            }}/>

            <Route path='/' exact component={Login} />
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
