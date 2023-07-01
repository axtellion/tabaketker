import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
  width: 1248px;

  margin: 0 auto;
  padding-bottom: 165px;
`;

export const Title = styled.h2`
  font-size: 32px;

  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;

  margin-bottom: 48px;
`;

export const Item = styled.ul`
  display: flex;
  gap: 24px;
`;

export const List = styled.li`
  width: 400px;
`;

export const ListBox = styled.div`
  width: 96px;
  height: 96px;

  border-radius: 100%;
  background-color: #c1dcdc;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-bottom: 24px;
`;

export const ListTitle = styled.h3`
  font-size: 18px;
`;

export const ListText = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
