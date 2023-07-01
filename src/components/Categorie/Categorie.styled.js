import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;

  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;

  margin-bottom: 96px;
`;

export const Box = styled.div`
  background-color: #c1dcdc;
`;

export const Item = styled.ul`
  width: 1248px;
  height: 841px;

  position: relative;

  padding-top: 48px;
  padding-bottom: 101px;

  li:nth-child(1) {
    top: -48px;
    left: 0;
  }
  li:nth-child(2) {
    left: 450px;
  }
  li:nth-child(3) {
    top: -48px;
    right: 0;
  }

  margin: 0 auto;
`;

export const List = styled.li`
  position: absolute;
`;

export const CartImg = styled.img`
  width: 350px;
  height: 510px;

  border-radius: 13px;

  margin-bottom: 12px;
`;

export const CartTitle = styled.h3`
  font-size: 18px;
  font-weight: 800;

  margin-bottom: 12px;
`;

export const CartText = styled.p`
  font-size: 18px;
  font-weight: 600;

  margin-bottom: 24px;
`;

export const CartBtn = styled.button`
  width: 150px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 18px;
  font-weight: 600;

  background-color: #ffffff;
  border: none;
  border-radius: 8px;

  margin: 0 auto;
`;
