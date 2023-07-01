import {
  CartBtn,
  CartImg,
  CartText,
  CartTitle,
  Container,
  Item,
  List,
  Text,
  Title,
  Box,
} from './Categorie.styled';

import categori_picture_1 from '../../picture/categorie_1.jpg';
import categori_picture_2 from '../../picture/categorie_2.jpg';
import categori_picture_3 from '../../picture/categorie_3.jpg';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export const Categorie = () => {
  return (
    <Container>
      <Title>Categories</Title>
      <Text>Find what you are looking for</Text>
      <Box>
        <Item>
          <List>
            <CartImg src={categori_picture_1} alt="flawers"></CartImg>
            <CartTitle>Natural Plants</CartTitle>
          </List>
          <List>
            <CartImg src={categori_picture_2} alt="flawers"></CartImg>
            <CartTitle>Natural Plants</CartTitle>
            <CartText>
              Horem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </CartText>
            <CartBtn>
              Explore <HiOutlineArrowNarrowRight size={24} />
            </CartBtn>
          </List>
          <List>
            <CartImg src={categori_picture_3} alt="flawers"></CartImg>
            <CartTitle>Natural Plants</CartTitle>
          </List>
        </Item>
      </Box>
    </Container>
  );
};
