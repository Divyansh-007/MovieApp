import { combineReducers } from 'redux';
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITES } from '../actions'

const initialMovieState = {
    all_movies: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMovieState, action){
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

const initialSearchState = {
    result: {}
}

export function search(state = initialSearchState, action){
    return state;
}

const initialRootState = {
    movies: initialMovieState,
    search: initialSearchState
}

// created by us
// export default function rootReducer(state = initialRootState, action){
//     return{
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }

// provided by redux
export default combineReducers({
    movies: movies,
    search: search
});