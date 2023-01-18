import React from "react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, CheckIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <Flex>
        <Box bg="#2874f0" w="100%" p={4} color="white">
          <InputGroup>
            <Input placeholder="Search for products, brands and more" bg='white' width='35%' size='sm' height='38px'/>
            <InputRightElement children={<SearchIcon color="red" marginEnd='1000px' />} />
          </InputGroup>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
