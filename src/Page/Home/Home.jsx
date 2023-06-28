import { About } from 'components/About/About';
import { Box } from 'components/Box';
import { Hero } from 'components/Hero/Hero';
import { Praises } from 'components/Praises/Praises';

export const Home = () => {
  return (
    <Box>
      <Hero />
      <Praises />
      <About />
    </Box>
  );
};
