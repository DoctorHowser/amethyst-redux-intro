import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers!
// const [count, setCount ] = useState(0);
const count = (state = 0, action) => {
  //console.log(`Hey y'all Im a reducer!`, action);

  if(action.type === 'INCREASE') {
    return state + 1;
  } else if (action.type === 'DECREASE') {
    return state - 1;
  }

   return state;
}

const elementList = (state = [], action) => {
  //console.log('Im a different reducer!', action);
  if(action.type === 'ADD_ELEMENT') {
    console.log(action.payload)
    // state.push(action.payload);
    // ... spread allows us to keep the old values while adding to it
    // useful when we need a new array
    return [ ...state, action.payload]
  }

  return state
}

//STORE!
const storeInstance = createStore(
  combineReducers(
    {
      count,
      elementList
    }
  ), 
  applyMiddleware(logger)
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
