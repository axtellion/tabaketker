import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoTwitter } from 'react-icons/bi';
import { Container, Box, ListBox, Text, Title, SocialList, SocialItem, AfterText, FooterBG } from "./Foter.styled"


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
    <ListBox></ListBox>
    <AfterText>2023 all Right Reserved Term of use Tabakerka</AfterText>
</Container></FooterBG>
}