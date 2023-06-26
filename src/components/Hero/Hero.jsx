import {
  Item,
  Title,
  Box,
  Container,
  ImgBox,
  Img,
  ImgLeft,
  ImgRight,
  Romb,
} from './Hero.styled';
import flawer from '../../picture/flawer.png';
import leftArrow from '../../picture/leftArow.png';
import rightArrow from '../../picture/RightArrow.png';

export const Hero = () => {
  return (
    <Container>
      <Box>
        <Title>
          Buy your <br /> dream plants
        </Title>
        <Item>
          <li>
            <p>50+</p> <span>Plant Species</span>
          </li>
          <li>
            <p>100+</p> <span>Customers</span>
          </li>
        </Item>
      </Box>

      <ImgBox>
        <Img src={flawer} alt="flawer" />
        <ImgLeft src={leftArrow} alt="Arrow" />
        <ImgRight src={rightArrow} alt="Arrow" />
        <Romb></Romb>
      </ImgBox>
    </Container>
  );
};
