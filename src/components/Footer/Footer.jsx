import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoTwitter } from 'react-icons/bi';
import { Container, Box, ListBox, Text, Title, SocialList, SocialItem, AfterText, FooterBG, List, Item, ListTitle, ListText } from "./Foter.styled"


export const Footer = () => {
    return <FooterBG><Container>
    <Box>
        <Title>Tabakerka</Title>
        <Text>We help you find <br /> your dream plant</Text>
        <SocialList>
            <SocialItem>
                <BiLogoFacebook size={20} color='grey'/>
            </SocialItem>
            <SocialItem>
                <BiLogoInstagramAlt size={20} color='grey'/>
            </SocialItem>
            <SocialItem>
                <BiLogoTwitter size={20} color='grey'/>
            </SocialItem>
        </SocialList>
        
    </Box>
    <ListBox>
        <List>
            <Item><ListTitle>Information</ListTitle></Item>
            <Item><ListText>About</ListText></Item>
            <Item><ListText>Product</ListText></Item>
            <Item><ListText>Blog</ListText></Item>
        </List>
        <List>
            <Item><ListTitle>Company</ListTitle></Item>
            <Item><ListText>Community</ListText></Item>
            <Item><ListText>Career</ListText></Item>
            <Item><ListText>Our story</ListText></Item>
        </List>
        <List>
            <Item><ListTitle>Contact</ListTitle></Item>
            <Item><ListText>Getting Started</ListText></Item>
            <Item><ListText>Pricing</ListText></Item>
            <Item><ListText>Resources</ListText></Item>
        </List>
    </ListBox>
   
</Container>
    <AfterText>2023 all Right Reserved Term of use TABAKERKA</AfterText>
</FooterBG>
}