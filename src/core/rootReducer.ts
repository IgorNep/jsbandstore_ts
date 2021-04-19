import { combineReducers } from 'redux';
import { booksReducer } from '../bus/books/booksReducer';
import { userLoginReducer } from '../bus/userLogin/userLoginReducer';
import { currentBookReducer } from '../bus/currentBook/currentBookReducer';
import { cartReducer } from '../bus/cart/cartReducer';

export default combineReducers({
  userLogin: userLoginReducer,
  books: booksReducer,
  currentBook: currentBookReducer,
  cart: cartReducer,
});
