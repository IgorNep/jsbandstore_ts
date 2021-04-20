import React from 'react';
import styled from 'styled-components';
import { CartItemProps } from '../../bus/cart/cartReducer';
import Button from '../common/Button';
import { StyledContainer } from '../styled/Container';

interface CartProps {
  cartItems: CartItemProps[];
  onDeleteClick: (id: string) => void;
}

const StyledTable = styled.table`
  margin-top: 2rem;
  width: 100%;
  border-collapse: collapse;
  tr,
  th,
  td {
    border: 1px solid #ccc;
  }
`;

const Cart: React.FC<CartProps> = ({ cartItems, onDeleteClick }) => {
  return (
    <StyledContainer>
      <StyledTable>
        {cartItems.length > 0 ? (
          <>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                  <td>$ {(item.qty * item.price).toFixed(2)}</td>
                  <td>
                    <Button
                      title='Delete'
                      bgColor='red'
                      onClick={() => onDeleteClick(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        ) : (
          <h3>Cart is empty</h3>
        )}
      </StyledTable>
    </StyledContainer>
  );
};

export default Cart;
