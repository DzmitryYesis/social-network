import { ReactElement } from 'react';

import styled from 'styled-components';

import { UsersPagePropsType } from 'types';

type DivPropsType = {
  direction: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
};

const LogoImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

const Div = styled.div<DivPropsType>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 600px;
  border: 1px solid black;
`;

export const User = ({
  id,
  followed,
  fullName,
  logo,
  status,
  location,
}: UsersPagePropsType): ReactElement => (
  <Wrapper key={id}>
    <Div direction="column" alignItems="centre">
      <div>
        <LogoImg src={logo} alt="user-logo" />
      </div>
      <div>
        {followed ? (
          <button type="button">UNFOLLOWED</button>
        ) : (
          <button type="button">FOLLOWED</button>
        )}
      </div>
    </Div>
    <Div direction="row" justifyContent="space-between" width="450px">
      <Div direction="column" alignItems="flex-start" justifyContent="space-around">
        <div>{fullName}</div>
        <div>{status}</div>
      </Div>
      <Div direction="column" alignItems="flex-end" justifyContent="space-around">
        <div>{location.city}</div>
        <div>{location.country}</div>
      </Div>
    </Div>
  </Wrapper>
);
