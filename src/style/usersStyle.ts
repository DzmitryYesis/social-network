import styled from 'styled-components';

import { DivPropsType } from 'style/types';

export const LogoImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

export const Div = styled.div<DivPropsType>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 600px;
  border: 1px solid black;
`;
