import { ADD_MOVIES } from '../actions'

const initialState = {
    all_movies: [],
    favourites: []
}

export default function movies(state = initialState, action){
    if(action.type === ADD_MOVIES){
        return {
            ...state,
            all_movies: action.movies
        }
    }
    return state;
}