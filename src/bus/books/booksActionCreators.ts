import apiService from '../../utils/api/apiService';
import { books } from '../../utils/api/endpoints';
import { Action } from './booksActions';
import { ActionTypes } from './booksTypes';
import { Dispatch } from 'redux';
import { RootState } from '../../core/store';

export const getBooks = () => async (
  dispatch: Dispatch<Action>,
  getState: () => RootState,
) => {
  dispatch({ type: ActionTypes.GET_BOOKS_REQUEST });

  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const params = {
      headers: {
        Authorization: `Bearer ${userInfo!.token}`,
      },
    };
    const result = await apiService.getData(books, params);

    dispatch({ type: ActionTypes.GET_BOOKS_SUCCESS, payload: result });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_BOOKS_FAIL, payload: error.message });
  }
};
