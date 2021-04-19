import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') || '{}')
  : null;

const initialState: any = {
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);
export type RootState = ReturnType<typeof store.getState>;
export default store;
