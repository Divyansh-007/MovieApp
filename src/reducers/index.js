import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITES } from '../actions'

const initialState = {
    all_movies: [],
    favourites: [],
    showFavourites: false
}

export default function movies(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                all_movies: action.movies
            }
        case ADD_FAVOURITE: 
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE:
            const filterArray = state.favourites.filter(movie => movie.Title !== action.movie.Title);
            return{
                ...state,
                favourites: filterArray
            }
        case SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites: action.value
            }
        default: return state
    }


    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         all_movies: action.movies
    //     }
    // }
    // return state;
}