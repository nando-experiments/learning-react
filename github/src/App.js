import React, { Component } from 'react'
import Repos from './components/github/ReposContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Olá React!</h1>
        <Repos></Repos>
      </div>
    )
  }
}

export default App
