import React, { Component } from 'react';
import './App.css';
import Banner from './Banner/Banner';
import Results from './Results/Results';

const key = "AIzaSyAOzZQI621AN5ELHfkPVLAvw1JRxg4CQ5w";




class App extends Component {
  state = {}
  
  APIcall() {
    const baseURL = "https://www.googleapis.com/books/v1/volumes?q="
  }


  render() {
    return (
      <div className="App">
        <Banner></Banner>
        
        <Results></Results>       
      </div>
    );
  }
}


export default App;
