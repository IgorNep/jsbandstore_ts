import styled from 'styled-components';

interface StyledFlexProps {
  direction?: string;
  algin?: string;
  justify?: string;
}

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.justify || 'space-between'};
  align-items: ${(props) => props.algin || 'center'};
  flex-direction: ${(props) => props.direction || 'raw'};
`;
