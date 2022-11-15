import React, { Component} from 'react';
import './App.css';
import Mycars from './components/Mycars';

class App extends Component {

  state = {
    titre : "Mon catalogue voitures"
  }


  render(){

    return (

      <div className="App">

        {/* On passe le state comme un props dans cet element parent pour le recupérer dans l'element enfant MyCas grace à this (class->state)*/}
        <Mycars title = {this.state.titre} />

      </div>

    )
  }

}

export default App;
