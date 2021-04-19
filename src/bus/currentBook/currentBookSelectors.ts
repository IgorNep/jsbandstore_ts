import { RootState } from '../../core/store';
import { IBook } from '../../utils/types/bookType';

export const loadingSelector = (state: RootState): boolean =>
  state.currentBook.loading;
export const errorSelector = (state: RootState): string | null =>
  state.currentBook.error;
export const currentBookSelector = (state: RootState): IBook | null =>
  state.currentBook.book;
