import { HStack, Image, Text, Spacer } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
import logo from '@/assets/gamezone.png';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text fontSize="xl" fontWeight="bold">
        GameZone
      </Text>
      <Spacer />
      <ColorModeButton />
    </HStack>
  );
};
export default NavBar;
