import { CurrentBookTypes } from './currentBookTypes';
import { IBook } from '../../utils/types/bookType';

interface GetBookByIdRequest {
  type: CurrentBookTypes.GET_BOOK_BY_ID_REQUEST;
}

interface GetBookByIdSuccess {
  type: CurrentBookTypes.GET_BOOK_BY_ID_SUCCESS;
  payload: IBook | null;
}

interface GetBookByIdFail {
  type: CurrentBookTypes.GET_BOOK_BY_ID_FAIL;
  payload: string | null;
}

export type Action = GetBookByIdRequest | GetBookByIdSuccess | GetBookByIdFail;
