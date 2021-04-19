import apiService from '../../utils/api/apiService';
import { signin } from '../../utils/api/endpoints';
import { Action } from './userLoginActions';
import { ActionTypes } from './userLoginTypes';
import { Dispatch } from 'redux';

export const loginUser = (username: string) => async (
  dispatch: Dispatch<Action>,
) => {
  dispatch({ type: ActionTypes.USER_LOGIN_REQUEST });

  try {
    const result = await apiService.postData(signin, { username });

    dispatch({ type: ActionTypes.USER_LOGIN_SUCCESS, payload: result });
    localStorage.setItem('userInfo', JSON.stringify(result));
  } catch (error) {
    dispatch({ type: ActionTypes.USER_LOGIN_FAIL, payload: error.message });
  }
};

export const userLogout = () => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.USER_LOGOUT });
  localStorage.removeItem('userInfo');
};
