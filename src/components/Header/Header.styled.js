import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  width: 1248px;
  display: flex;
  justify-content: space-between;

  margin-bottom: 48px;
  padding: 10px 20px;
`;

export const Link = styled(NavLink)`
  color: #dcdcdc;
  font-size: 18px;

  &.active {
    color: #000000;
  }
`;

export const NavItem = styled.ul`
  display: flex;
  gap: 20px;
`;
