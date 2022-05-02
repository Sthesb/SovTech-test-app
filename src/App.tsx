import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  

  

  console.log("pokem")
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {/* <input type="text" value={searchName} onChange={(event) => setSearchName(event.target.value)}/>
      <button onClick={handleSubmit}>Search</button>
      {movieState.loading && (
        <p>Loading...</p>
      )}

      { movieState.movie && (
        <div>
          { movieState.movie.count > 0 ? 

            <div>
              <h3>{movieState.movie.results[0].title}</h3>
              <small>Released: {movieState.movie.results[0].release_date}</small>
              <p>Director: {movieState.movie.results[0].director}</p>
              <p>Produced by: {movieState.movie.results[0].producer}</p>
              <p>Added: {movieState.movie.results[0].created} and edited: {movieState.movie.results[0].edited}</p>
            </div> 

            : <div>No Data</div>}
        </div>
      )} */}
    </div>
  );
}

export default App;
