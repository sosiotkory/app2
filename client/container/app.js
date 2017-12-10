import React, { Component } from 'react';
import  { render } from 'react-dom';
import TodoForm from '../components/todoForm.js';


class App extends Component{
  render(){
    return(
      <ul>
      <TodoForm />

      </ul>

    )
  }
}
 export default App;
