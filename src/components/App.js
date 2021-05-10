import React from 'react';
import data from '../data';
import { addMovies } from '../actions'
import Navbar from './Navbar';
import MovieCard from './MovieCard';

class App extends React.Component {
  componentDidMount(){
    const { store } = this.props;
    store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate();
    });

    // api call
    // dispatch action
    this.props.store.dispatch(addMovies(data));

    console.log('STATE',this.props.store.getState());
  }
  render() {
    const movie = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movie.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
