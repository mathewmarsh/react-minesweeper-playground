import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './component/Board';
import './style.scss';

class Game extends React.Component {
  state = {
    difficulty: 'beginner',
    height: 8,
    width: 8,
    mines: 10
  };

  handleDifficultyChange = event => {
    this.setState({ difficulty: event.target.value });
  };

  render() {
    const { difficulty, height, width, mines } = this.state;
    return (
      <div className="game">
        <button value="beginner" onClick={this.handleDifficultyChange}>Beginner</button>
        <button value="intermediate" onClick={this.handleDifficultyChange}>Intermediate</button>
        <button value="expert" onClick={this.handleDifficultyChange}>Expert</button>
        <Board difficulty={difficulty} height={height} width={width} mines={mines} />
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

