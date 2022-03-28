import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from 'react';

const Navbar = ({ onOpen }) => {
  return (
    <Box height="100%" p="5" bg="gray.100">
        <Box maxW="6xl" mx="auto">
            <Flex
                as="nav"
                aria-label="Site navigation"
                align="center"
                justify="space-between"
            >
                <Heading mr="4">
                    Employee Management System
                </Heading>
                <Box>
                    <Button colorScheme="blue" onClick={onOpen}>
                        Add Employee
                    </Button>
                </Box>
            </Flex>
        </Box>
    </Box>
  );
};

Navbar.propTypes = {
    onOpen: PropTypes.any,

}

export default Navbar;