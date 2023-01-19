import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import img1 from "../Images/QuicKart.png"
import {
  Flex,
  Box,
  useDisclosure,
  Stack,
  Link,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        py={2}
        px={4}
        direction={["column", "row"]}
        justify="space-around"
        bg="#2874f0"
      >
        <Flex alignItems="center" wrap="wrap">
          <Flex flexGrow={1} justify="center" /*border='1px'*/>
            {/* <Heading ml={[4, 0]}>Zensurance</Heading> */}
            <Box ml={[4, 0]}>
              <Image src={img1} alt="QuicKart" width='150px' marginLeft='100px'/>
            </Box>
            <Box ml={[4, 0]}>
              <InputGroup>
                <Input
                  placeholder="Search for products, brands and more"
                  bg="white"
                  w="450px"
                  marginLeft="20px"
                  size='sm'
                  h='38px'
                />
                <InputRightElement children={<SearchIcon color="#2874f0" />} />
              </InputGroup>
            </Box>
            <Box ml={[4, 0]}>
              <Button bg="white" size="sm" borderRadius='none' marginLeft='20px' paddingLeft='50px' paddingRight='50px' marginTop='3px' color='#2874f0'>
                Login
              </Button>
            </Box>
          </Flex>
          <HamburgerIcon
            onClick={isOpen ? onClose : onOpen}
            display={["inline", "none"]}
            // border='1px'
          />
        </Flex>
        <Flex
          display={[isOpen ? "flex" : "none", "flex"]}
          // bg={["teal.500", "orange.400"]}
        >
          <Stack align="center" direction={["column", "row"]} spacing="30px" marginRight='100px' color='white'>
            <Link>Become a Seller</Link>
            <Link>More</Link>
            <Link>Cart</Link>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
