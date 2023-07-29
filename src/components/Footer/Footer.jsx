import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoTwitter } from 'react-icons/bi';
import { Container, Box, ListBox, Text, Title, SocialList, SocialItem, AfterText } from "./Foter.styled"


export const Footer = () => {
    return <Container>
        <Box>
            <Title>Tabakerka</Title>
            <Text>We help you find your dream plant</Text>
            <SocialList>
                <SocialItem>
                    <BiLogoFacebook />
                </SocialItem>
                <SocialItem>
                    <BiLogoInstagramAlt/>
                </SocialItem>
                <SocialItem>
                    <BiLogoTwitter/>
                </SocialItem>
            </SocialList>
            <AfterText>2023 all Right Reserved Term of use Tabakerka</AfterText>
        </Box>
        <ListBox></ListBox>
    </Container>
}