import { Box } from 'components/Box';
import { Logo } from 'components/Logo/Logo';

export const Header = () => {
  return (
    <Box flexbox>
      <Logo />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Contacts</li>
      </ul>
    </Box>
  );
};
