import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navigationBar';
import Jumbotron from './components/jumbotron';
import CharacterCards from './components/characterCards';

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    message: "Click an image to begin!"
  }

  correctOrIncorrect = decision => {
    this.setState({Message: 
      (decision === true ? 
      "You guessed correctly!" :
      "You guessed incorrectly!")});
  }
  render () {
    return (
      <React.Fragment>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          middleMessage={this.state.message}
        />
        <Jumbotron />
        <main className="container">
          <CharacterCards />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
