import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getBookById } from '../../bus/currentBook/currentBookActionCreators';
import {
  errorSelector,
  loadingSelector,
  currentBookSelector,
} from '../../bus/currentBook/currentBookSelectors';
import Button from '../../components/common/Button';
import CurrentBook from '../../components/CurrentBook';

interface ParamsProps {
  id: string;
}

const BookDetailsContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params: ParamsProps = useParams();
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const book = useSelector(currentBookSelector);

  useEffect(() => {
    dispatch(getBookById(params.id));
  }, [dispatch, params]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  return error ? (
    <h3>{error}</h3>
  ) : (
    <>
      <Button title='Go Back' onClick={() => history.goBack()} />
      {book && <CurrentBook key={book.id} book={book} />}
    </>
  );
};

export default BookDetailsContainer;
