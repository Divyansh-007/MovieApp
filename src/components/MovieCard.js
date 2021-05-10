import React from 'react';
import { addFavourite, removeFavourite } from '../actions'

class MovieCard extends React.Component {

    handleFavClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourite(movie));
    }

    handleUnfavClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFavourite(movie));
    }

    render(){
        const { movie, isFavourite } = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite
                            ? <button id="unfavourite-btn" onClick={this.handleUnfavClick}>Unfavourite</button>
                            : <button id="favourite-btn" onClick={this.handleFavClick}>Favourite</button>
                        }
                        {/* <button id="favourite-btn" onClick={this.handleFavClick}>Favourite</button> */}
                    </div>
                </div>
            </div>  
          );
    }
}

export default MovieCard;