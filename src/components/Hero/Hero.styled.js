import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin: 0 auto;

  justify-content: space-between;
  width: 1248px;
  height: 512px;

  background-color: #c1dcdc;
  border-radius: 24px;

  margin-bottom: 96px;
`;

export const Box = styled.div`
  padding: 48px;
`;

export const Title = styled.h1`
  font-size: 64px;

  margin-bottom: 24px;
`;

export const Item = styled.ul`
  display: flex;
  gap: 48px;

  li {
    p {
      font-size: 32px;
    }
    span {
      font-size: 18px;
    }
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  li:last-child {
    position: relative;
    padding-left: 48px;
  }

  li:last-child::before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    border-left: 1px solid black;
  }
`;

export const ImgBox = styled.div`
  position: relative;

  width: 400px;
`;

export const Img = styled.img`
  position: absolute;
  right: 56px;
  bottom: 0;

  z-index: 10;

  width: 411px;
  height: 513px;
`;

export const ImgLeft = styled.img`
  position: absolute;
  top: 13px;
  right: 20px;
`;

export const ImgRight = styled.img`
  position: absolute;
  right: 522px;
  bottom: 60px;
`;

export const Romb = styled.div`
  position: absolute;
  bottom: 0;
  right: 72px;

  width: 450px;
  height: 400px;

  background-color: #000000;

  border-radius: 200px 200px 0 200px;
`;
