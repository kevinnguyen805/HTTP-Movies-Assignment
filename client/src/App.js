import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateForm from './Movies/UpdateForm'
import axios from 'axios'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

    // where the party begins
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetchMovies()
  },[])

  const fetchMovies = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  }
  
  // const deleteMovie = id => {
  //   axios.delete(`http://localhost:5000/api/movies/${id}`)
  //   .then(response => {
  //     fetchMovies();
  //     props.history.push('/')
  //   })
  // }









  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" 
        render={props => {
          return <MovieList {...props} setMovieList={setMovieList} movieList={movieList}/>
        }}
      />
  
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} fetchMovies={fetchMovies}/>;
        }}
        />
      <Route path="/edit-movie/:id"
        render={props => (
          <UpdateForm {...props} movieList={movieList} setMovieList={setMovieList} fetchMovies={fetchMovies}/>
        )} />
    </>
  );
};

export default App;
