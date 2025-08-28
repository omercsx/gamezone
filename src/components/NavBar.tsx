import { HStack, Image } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
import logo from '@/assets/gamezone.png';

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent={'space-between'}>
      <Image src={logo} boxSize="60px" />

      <ColorModeButton />
    </HStack>
  );
};
export default NavBar;
