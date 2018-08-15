import React, { Component } from 'react';
import logo from './assets/img/tmd_logo.svg';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.performSearch()
  }
  performSearch(searchTerm) {
    console.log("Perform search using moviedb");
    const urlString = "https://api.themoviedb.org/3/search/movie?&api_key=131dcc9a095fcf254a2ea5db393a66c7&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        const results = searchResults.results;

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_path = "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data");
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <div className="navBar">
          <div className="identity">
            <img width="50" src={logo} alt="logo" />
          </div>
          <div className="title">
            <h2>flixScout</h2>
          </div>
        </div>
        <div className="input-group">
            <span className="search fas fa-search"></span>
          <input onChange={this.searchChangeHandler.bind(this)} type="text" className="inputItem" placeholder="Enter search term..."/>
        </div>
        <div className="container">
          <div className="card-deck">
            {this.state.rows}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
