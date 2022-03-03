import  { createStore, combineReducers } from 'redux';

import rootReducer from './reducers';




  const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  window.store = store; //в глобальную область прилоги поместим переменную store 

  export default store;