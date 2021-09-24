import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
