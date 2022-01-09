import { Box, Center, Image } from "@chakra-ui/react";
import source from "../../assets/0-logo.png";

function Header() {
  return (
    <Box w='100%' bg='brand.dark'>
      <Center p={5}>
        <Image src={source} />
      </Center>
    </Box>
  );
}

export default Header;
