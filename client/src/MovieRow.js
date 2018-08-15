import React from 'react'
import './App.css';


class MovieRow extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }
  render() {
    return (
      <div className="card">
        <img className="card-img" src={this.props.movie.poster_path} alt="Movie Poster"/>
        <h1 className="title">{this.props.movie.title}</h1>
        <p className="overview">{this.props.movie.overview}</p>
      </div>
    );
  }
}

export default MovieRow
