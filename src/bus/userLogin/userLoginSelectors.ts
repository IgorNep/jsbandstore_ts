import { RootState } from '../../core/store';
import { UserInfoType } from '../../utils/types/userInfo';

export const errorSelector = (state: RootState): string | null =>
  state.userLogin.error;
export const loadingSelector = (state: RootState): boolean =>
  state.userLogin.loading;
export const userInfoSelector = (state: RootState): UserInfoType | null =>
  state.userLogin.userInfo;
