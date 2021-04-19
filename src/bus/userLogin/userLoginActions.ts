import { ActionTypes } from './userLoginTypes';

interface UserLoginRequestAction {
  type: ActionTypes.USER_LOGIN_REQUEST;
}
interface UserLoginSuccessAction {
  type: ActionTypes.USER_LOGIN_SUCCESS;
  payload: any;
}
interface UserLoginFailAction {
  type: ActionTypes.USER_LOGIN_FAIL;
  payload: string;
}
interface UserLogout {
  type: ActionTypes.USER_LOGOUT;
}

export type Action =
  | UserLoginFailAction
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLogout;
