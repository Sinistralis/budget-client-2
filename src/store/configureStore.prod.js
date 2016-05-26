import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer as app } from '../reducers/app';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  app,
});


const store = createStore(
  rootReducer,
  {},
  applyMiddleware(sagaMiddleware)
);

sagas.map((saga) => sagaMiddleware.run(saga));

export default store;