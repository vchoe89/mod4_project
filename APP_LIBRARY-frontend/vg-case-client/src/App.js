import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import MainContainer from './components/MainContainer';
import GameList from './components/GameList';
import YourGames from './components/YourGames';
import GameForm from './components/GameForm';
const URL = "http://localhost:3000/games";

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
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/allgames' exact render={() => {return <MainContainer games={this.state.allGames}/>}}/>
            {/* <Route path='/yourgames' exact component={YourGames}/> */}
            <Route path='/addgame' exact component={GameForm} />
            {/* <Route path='/' exact component={Login}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
