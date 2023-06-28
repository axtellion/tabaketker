import {
  Container,
  Box,
  Title,
  Text,
  Btn,
  BoxCart,
  Img,
  CartTitle,
  CartText,
  Item,
  List,
} from './Praises.styled';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import praises_image_1 from '../../picture/praises_1.jpg';
import praises_image_2 from '../../picture/praises_2.jpg';
import praises_image_3 from '../../picture/praises_3.jpg';

export const Praises = () => {
  return (
    <Container>
      <Box>
        <Title>Best Selling Plants</Title>
        <Text>Easiest way to healthy life by buying your favorite plants</Text>
        <Btn>
          See more <HiOutlineArrowNarrowRight />
        </Btn>
      </Box>
      <BoxCart>
        <Item>
          <List>
            <Img src={praises_image_1} alt="flawer" />
            <CartTitle>Natural Plants</CartTitle>
            <CartText>$ 1,400.00</CartText>
          </List>
          <List>
            <Img src={praises_image_2} alt="flawer" />
            <CartTitle>Artificial Plants</CartTitle>
            <CartText>$ 900.00</CartText>
          </List>
          <List>
            <Img src={praises_image_3} alt="flawer" />
            <CartTitle>Artificial Plants</CartTitle>
            <CartText>$ 3,500.00</CartText>
          </List>
        </Item>
      </BoxCart>
    </Container>
  );
};
