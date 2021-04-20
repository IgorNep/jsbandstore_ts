import React from 'react';
import styled from 'styled-components';
import { StyledFlex } from '../styled/Flex';
import Button from './Button';

const StyledQtyHandler = styled(StyledFlex)`
  max-width: 50px;
  width: 100%;
`;

interface QtyHandlerProps {
  increase: () => void;
  decrease: () => void;
  value: string | number;
}

const QtyHandler: React.FC<QtyHandlerProps> = ({
  increase,
  decrease,
  value,
}) => {
  return (
    <StyledQtyHandler>
      <Button title='-' onClick={decrease} />
      <input type='text' value={value} />
      <Button title='+' onClick={increase} />
    </StyledQtyHandler>
  );
};

QtyHandler.defaultProps = {
  value: 0,
};

export default QtyHandler;
