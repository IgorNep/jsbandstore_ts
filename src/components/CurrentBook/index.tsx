import React from 'react';
import { IBook } from '../../utils/types/bookType';
import { StyledContainer } from '../styled/Container';
import { StyledFlex } from '../styled/Flex';

interface CurrentBookProps {
  book: IBook;
}

const CurrentBook: React.FC<CurrentBookProps> = ({ book }) => {
  return (
    <>
      <StyledContainer>
        <StyledFlex direction='column'>
          <h4>Book Details</h4>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <img src={book.cover} alt='cover' />
        </StyledFlex>
      </StyledContainer>
    </>
  );
};

export default CurrentBook;
