import React from 'react';
import styled from 'styled-components';
import { IBook } from '../../utils/types/bookType';

interface ImageProps {
  src: string;
}

interface BookItemProps {
  book: IBook;
  onDetailsClick: (id: string) => void;
}

const StyledCard = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.main};
  padding: 1rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: none;
  }
`;
const StyledImage = styled.img<ImageProps>`
  max-width: 150px;
  height: 150px;
  display: block;
  src: ${(props) => props.src};
`;

const BookItem: React.FC<BookItemProps> = (props) => {
  return (
    <StyledCard
      {...props}
      onClick={props.onDetailsClick.bind(null, props.book.id)}
    >
      <h4>{props.book.title}</h4>
      <StyledImage src={props.book.cover} alt='avatar' />
      <h5>{props.book.description}</h5>
    </StyledCard>
  );
};

export default BookItem;
