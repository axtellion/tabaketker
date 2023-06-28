import {
  Container,
  Item,
  List,
  ListBox,
  ListText,
  ListTitle,
  Text,
  Title,
} from './About.styled';

import {
  GiFlowerPot,
  GiCardboardBoxClosed,
  GiRotaryPhone,
} from 'react-icons/gi';

export const About = () => {
  return (
    <Container>
      <Title>About us</Title>
      <Text>Order now and appreciate the beauty of nature</Text>
      <Item>
        <List>
          <ListBox>
            <GiFlowerPot size={40} />
          </ListBox>
          <ListTitle>Large Assortment</ListTitle>
          <ListText>
            we offer many different types of products <br /> with fewer
            variations in each category.
          </ListText>
        </List>
        <List>
          <ListBox>
            <GiCardboardBoxClosed size={40} />
          </ListBox>
          <ListTitle>Fast & Free Shipping</ListTitle>
          <ListText>
            4-day or less delivery time, free shipping <br /> and an expedited
            delivery option.
          </ListText>
        </List>
        <List>
          <ListBox>
            <GiRotaryPhone size={40} />
          </ListBox>
          <ListTitle>24/7 Support</ListTitle>
          <ListText>
            answers to any business related inquiry <br /> 24/7 and in
            real-time.
          </ListText>
        </List>
      </Item>
    </Container>
  );
};
