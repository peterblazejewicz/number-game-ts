import React, { Component } from 'react';

import Game from './Game';

export interface AppState {
  score: number;
  gameId: number;
}

class App extends Component<{}, AppState> {
  state = {
    score: 0,
    gameId: Date.now(),
  };
  render() {
    return (
      <div>
        state: {this.state.score}
        <Game />
      </div>
    );
  }
}

export default App;
