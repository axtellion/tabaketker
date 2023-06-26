import { Logo } from 'components/Logo/Logo';
import { Link, NavItem, Box } from './Header.style';
import { BsCart } from 'react-icons/bs';

export const Header = () => {
  return (
    <Box>
      <Logo />
      <NavItem>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contacts">Contacts</Link>
      </NavItem>
      <BsCart size={24} />
    </Box>
  );
};
