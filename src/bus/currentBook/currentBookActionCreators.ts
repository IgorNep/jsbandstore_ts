import { Dispatch } from 'redux';
import { RootState } from '../../core/store';
import apiService from '../../utils/api/apiService';
import { books } from '../../utils/api/endpoints';
import { Action } from './currentBookActions';
import { CurrentBookTypes } from './currentBookTypes';

export const getBookById = (id: string) => async (
  dispatch: Dispatch<Action>,
  getState: () => RootState,
) => {
  dispatch({ type: CurrentBookTypes.GET_BOOK_BY_ID_REQUEST });

  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo!.token}`,
      },
    };

    const result = await apiService.getDataById(books, id, config);
    dispatch({
      type: CurrentBookTypes.GET_BOOK_BY_ID_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({ type: CurrentBookTypes.GET_BOOK_BY_ID_FAIL, payload: error });
  }
};
