import { GlobalStyle } from './GlobalStyle';

import { Routes, Route } from 'react-router-dom';
import { Home } from '../Page/Home/Home';
import { Products } from '../Page/Products/Products';
import { Contacts } from '../Page/Contacts/Contacts';

import { Box } from './Box';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <Box as="main" mx="auto" pt="48px" pb="48px">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <GlobalStyle />
    </Box>
  );
};
