import "./style.css"
import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        // super(props)
        console.log(super(props));
        
        this.state= {compteur : this.props.val}
      }
      incrementer = () =>{
        this.setState({compteur : this.state.compteur+1})
      }
      decrementer = () =>{
        this.setState({compteur : this.state.compteur-1})
      }
      initialiser = () =>{
        this.setState({compteur : this.state.compteur=0})
      }
  render() {
    return (
      
        <div className='app'>
          <h3>comppteur {this.state.compteur}</h3>
          <button onClick={this.incrementer}>incrementer</button>
          <button onClick={this.decrementer} disabled={this.state.compteur==0}>decrementer</button>
          <button onClick={this.initialiser}>initialiser a 0</button>
      </div>
      
    )
  }
}
