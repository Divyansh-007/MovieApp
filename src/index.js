import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';

// curried version of logger in arrow function form
const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== 'function') {
    console.log('ACTION_TYPE: ', action.type);
  }
  next(action);
}

// curried version of logger
// const logger = function({dispatch, getState}){
//   return function(next){
//     return function(action){
//       console.log('ACTION_TYPE: ',action.type);
//       next(action);
//     }
//   }
// }

// created by us
// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   if (typeof action === 'function') {
//     action(dispatch);
//     return;
//   }

//   next(action);
// };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log('store',store);
// console.log('Before State',store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Iron Man'}]
// });

// console.log('After State',store.getState());

export const StoreContext = createContext();

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>
  }
}

// changed due to context creation
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>, document.getElementById('root')
);


// ReactDOM.render(
//     <React.StrictMode>
//       <App store={store}/>
//     </React.StrictMode>, document.getElementById('root')
// );
