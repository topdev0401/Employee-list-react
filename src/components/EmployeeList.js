import {
    SimpleGrid,
    Heading
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import Employee from './Employee';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmployee } from '../actions/employeeAction';

const EmployeeList = (props) => {
    useEffect(() => {
        props.getEmployee(); // Get all employees
    }, [])

    return (
        <div>
            <Heading as='h4' size='md' color="grey">Employee List. You can click the card to update.</Heading>
            <SimpleGrid
                columns={{ base: 2, md: 3, lg: 4 }}
                gap={{ base: "4", md: "6", lg: "8" }}
                m="10"
            >
                {props.employees.map((employee, index) => (
                    <Employee
                        employee={employee}
                        key={index}
                        index={index}
                        openHandler={props.openHandler}
                    />
                ))}
            </SimpleGrid>
        </div>
    )
}

EmployeeList.propTypes = {
    getEmployee: PropTypes.func.isRequired,
    employees: PropTypes.array.isRequired,
    openHandler: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    employees: state.employeeList.employees
})

export default connect(mapStateToProps, {getEmployee})(EmployeeList);