import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <Box as="main" width="1024px" mx="auto" pb="50px">
      <Header />
      <GlobalStyle />
    </Box>
  );
};
