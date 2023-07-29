import { About } from 'components/About/About';
import { Box } from 'components/Box';
import { Categorie } from 'components/Categorie/Categorie';
import { Comments } from 'components/Comments/Comments';
import { Footer } from 'components/Footer/Footer';
import { Hero } from 'components/Hero/Hero';
import { Praises } from 'components/Praises/Praises';

export const Home = () => {
  return (
    <Box>
      <Hero />
      <Praises />
      <About />
      <Categorie />
      <Comments />
      <Footer />
    </Box>
  );
};
