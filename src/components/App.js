import React from 'react';
import data from '../data';
import { addMovies, showFavourites } from '../actions'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { StoreContext } from '../index'

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

  isFavourite(movie){
    const { movies } = this.props.store.getState();
    const { favourites } = movies;

    const index = favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }

    return false;
  }

  changeTab = (value) => {
    this.props.store.dispatch(showFavourites(value))
  }

  render() {
    console.log('STATE',this.props.store.getState());
    const { movies, search } = this.props.store.getState();
    const { all_movies, favourites, showFavourites } = movies;

    const displayList = showFavourites ? favourites : all_movies;
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.changeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : '' }`} onClick={() => this.changeTab(true)}>Favourites</div>
          </div>

          <div className="list">
            {displayList.map((movie, index) => (
              <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch} 
                isFavourite = {this.isFavourite(movie)}
              />
            ))}
          </div>
          {displayList.length === 0 ? <div className="no-movies">No movies to display!</div> : null }
        </div>
      </div>
    );
  }

}

class AppWrappper extends React.Component{
  render(){
    return(
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    )
  }
}

export default AppWrappper;
