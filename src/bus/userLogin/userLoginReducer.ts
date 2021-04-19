import { UserInfoType } from '../../utils/types/userInfo';
import { ActionTypes } from './userLoginTypes';
import { Action } from './userLoginActions';

export type UserLoginInitialStateType = {
  loading: boolean;
  userInfo: UserInfoType | null;
  error: string | null;
};

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

export const userLoginReducer = (
  state: UserLoginInitialStateType = initialState,
  action: Action,
): UserLoginInitialStateType => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_REQUEST:
      return {
        loading: true,
        error: null,
        userInfo: null,
      };
    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        error: null,
        userInfo: action.payload,
      };
    case ActionTypes.USER_LOGIN_FAIL:
      return {
        loading: true,
        error: action.payload,
        userInfo: null,
      };
    case ActionTypes.USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
