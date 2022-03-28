import React, { useState } from 'react';
import {
    Button,
    Text,
    Center,
    Box,
    Heading,
    Divider
} from '@chakra-ui/react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEmployee } from '../actions/employeeAction';

const Employee = (props) => {
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);
    const deleteHandler = (id) => {
        setIsDeleteLoading(true);
        props.deleteEmployee(id);
        setIsDeleteLoading(false);
    }
    return (
        <Box
          position="relative"
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="4"
          onClick={() => props.openHandler(props.index, props.employee)}
        >
            <Heading size="md" mt="3">
                {props.employee.name}
            </Heading>
            <Divider my="4" />
            <Text noOfLines={[1, 2, 3]} color="gray.800">
                {props.employee.job}
            </Text>
            <Divider my="1" />
            <Text noOfLines={[1, 2, 3]} color="gray.800">
                {props.employee.description}
            </Text>
            <Center>
                <Button
                    mt="4"
                    size="sm"
                    colorScheme="red"
                    onClick={(event) => {
                        event.stopPropagation();
                        deleteHandler(props.index);
                    }}
                    isDisabled={isDeleteLoading}
                >
                    Delete
                </Button>
            </Center>
        </Box>
    );
}

Employee.propTypes = {
    deleteEmployee: PropTypes.func.isRequired,
    openHandler: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    employee: PropTypes.any,
}

export default connect(() => ({}), {deleteEmployee})(Employee);