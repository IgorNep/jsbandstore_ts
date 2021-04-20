import React, { useState } from 'react';
import { IBook } from '../../utils/types/bookType';
import Button from '../common/Button';
import QtyHandler from '../common/QtyHandler';
import { StyledContainer } from '../styled/Container';
import { StyledFlex } from '../styled/Flex';
import { useDispatch } from 'react-redux';
import { addBookToCart } from '../../bus/cart/cartActionCreators';

interface CurrentBookProps {
  book: IBook;
}

const CurrentBook: React.FC<CurrentBookProps> = ({ book }) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  const onAddHandler = () => {
    const newBook = {
      title: book.title,
      id: book.id,
      price: book.price,
      qty,
    };
    dispatch(addBookToCart(newBook));
  };
  return (
    <>
      <StyledContainer>
        <StyledFlex direction='column'>
          <h4>Book Details</h4>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <img src={book.cover} alt='cover' />
          <QtyHandler
            increase={() => setQty(qty + 1)}
            decrease={() => setQty(qty - 1)}
            value={qty}
          />
          <Button title='Add To Cart' onClick={onAddHandler} />
        </StyledFlex>
      </StyledContainer>
    </>
  );
};

export default CurrentBook;
