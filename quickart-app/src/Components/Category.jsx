import React from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'

const Category = () => {
  return (
    <>
    <Container margin='auto' maxW='container.sm'>
      <Grid templateColumns="repeat(9, 1fr)" gap={6} justifyContent='center'>
        <GridItem w="100%" h="10" justifyContent="center">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100"
            width="60%"
          />
          <Link to="/offers">Top Offers</Link>
        </GridItem>
        <GridItem w="100%" h="10">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100"
            width="60%"
          />
          <Link to="/mobil&tablet">Mobiles & Tablets</Link>
        </GridItem>
        <GridItem w="100%" h="10">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100"
            width="60%"
          />
          <Link to="/electronics">Electronics</Link>
        </GridItem>
        <GridItem w="100%" h="10">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100"
            width="60%"
          />
          <Link to="/appliences">TVs & Appliances</Link>
        </GridItem>
        <GridItem w="100%" h="10">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100"
            width="60%"
          />
          <Link to="/fashion">Fashion</Link>
        </GridItem>
        <GridItem w="100%" h="10">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100"
            width="60%"
          />
          <Link to="/beauty">Beauty</Link>
        </GridItem>
        <GridItem w="100%" h="10">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100"
            width="60%"
          />
          <Link to="/home&furniture">Home & Furniture</Link>
        </GridItem>
        <GridItem w="100%" h="10">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100"
            width="60%"
          />
          <Link to="/flights">Flights</Link>
        </GridItem>
        <GridItem w="100%" h="10">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100"
            width="60%"
          />
          <Link to="/grocery">Grocery</Link>
        </GridItem>
      </Grid>
      </Container>
    </>
  );
};

export default Category;
