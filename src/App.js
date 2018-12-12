import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list'

const server_response_dogs = ['Rex', 'billy', 'wangy', 'shlongy', 'pritchard']

class App extends Component {

  state = {
    on: false
  }

  updateStateData = () => {
    this.setState({ on: !this.state.on })
  }


  render() {
    return (
      <div >
        {(this.state.on === true) ? <div> Sports </div> : null}
        <h1> Dogs I can Walk </h1>
        <List dogs={server_response_dogs} funky={this.updateStateData} >
          List of Dogs
        </List>

      </div>
    );
  }
}

export default App;
