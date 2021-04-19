import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { userInfoSelector } from '../../bus/userLogin/userLoginSelectors';
import {
  errorSelector,
  loadingSelector,
  booksSelector,
} from '../../bus/books/booksSelectors';
import { StyledContainer } from '../../components/styled/Container';
import { getBooks } from '../../bus/books/booksActionCreators';
import { StyledGrid } from '../../components/styled/Grid';
import BookItem from '../../components/BookItem';
import { IBook } from '../../utils/types/bookType';

const BooksContainer = () => {
  const userInfo = useSelector(userInfoSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const books = useSelector(booksSelector);

  const onDetailsClick = (id: string) => {
    history.push(`/book/${id}`);
  };

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [history, userInfo]);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledContainer>
      {error ? (
        <h3>{error}</h3>
      ) : (
        <StyledGrid>
          {books.length > 0 &&
            books.map((book: IBook) => (
              <BookItem
                book={book}
                key={book.id}
                onDetailsClick={onDetailsClick}
              />
            ))}
        </StyledGrid>
      )}
    </StyledContainer>
  );
};

export default BooksContainer;
