import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
 constructor(){
 super()
   this.state = {
     username: 'umapreethi',
      data: {}
   }
  }
 

 componentDidMount(){
   this.setState({
     
   })
    let url = "https://api.github.com/users/umapreethi-dev";
    fetch(url)
     .then(res => res.json())
     .then(data =>{
       console.log(data);
       this.setState({
         data : data
       })
     })
 }


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
