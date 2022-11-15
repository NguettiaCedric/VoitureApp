import React, { Component} from 'react';
import './App.css';
import { Mycars } from './components/Mycars';

class App extends Component {

  state = {
    titre : "Catalogue voitures ",
    color : "green",
  }

  changeTitle = (e) => {
    // console.log(e.target);
    this.setState(
      {
        titre : 'Mon nouveau titre'
      }
    )   
  }

  changeViaParam = (titre) => {
    this.setState({
      titre: titre,
    })
  }


  changeViaBind = (param) => {
    this.setState({
      titre: param,
    })
  }

  changeViaInput = (e) => {
    // console.log(e.target);
    this.setState({
      titre: e.target.value,
    })
  }

  
  render(){

    return (

      <div className="App">

        {/* On passe le state comme un props dans cet element parent pour le recupérer dans l'element enfant MyCars grace à this (class->state)*/}
        <Mycars 
          title = { this.state.titre } 
          color = { this.state.color } 
         />


        <button onClick  = {this.changeTitle}>Changer le nom en dur</button>
        <button onClick  = {() => this.changeViaParam('Titre via param')}>Via param</button>
        <button onClick  = {this.changeViaBind.bind(this,'Titre via bind')}>Via Bind</button>
        <input  onChange = {this.changeViaInput} value={this.state.titre}/>

      </div>

    )
  }

}

export default App;
