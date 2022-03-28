import {
    Alert,
    AlertIcon,
    Button,
    ButtonGroup,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    Textarea,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmployee, updateEmployee } from '../actions/employeeAction';

const ManageEmployee = (props) => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if(props.employee) {
            setName(props.employee.name);
            setJob(props.employee.job);
            setDescription(props.employee.description);
        }
    }, [props.employee]);

    const submitHandler = async (event) => {
        let error;
        event.preventDefault();
        setErrorMessage("");
        if (description.length <= 10) {
          setErrorMessage("Description must have more than 10 characters");
          return;
        }
        setIsLoading(true);
        if (props.employee) {
            props.updateEmployee(props.employee.id, {name, job, description});
        } else {
            props.addEmployee({name, job, description});
        }
    
        setIsLoading(false);
        if (error) {
          setErrorMessage(error);
        } else {
          closeHandler();
        }
    };
    
    const closeHandler = () => {
        setName("");
        setJob("");
        setDescription("");
        props.setEmployee(null);
        props.onClose();
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onClose={props.onClose}
            isCentered
            initialRef={props.initialRef}
        >
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={submitHandler}>
                    <ModalHeader>{props.employee ? "Update Employee" : "Add Employee"}</ModalHeader>
                    <ModalCloseButton onClick={closeHandler} />
                    <ModalBody pb={6}>
                        {errorMessage && (
                            <Alert status="error" borderRadius="lg" mb="6">
                                <AlertIcon />
                                <Text textAlign="center">{errorMessage}</Text>
                            </Alert>
                        )}
                        <FormControl isRequired={true}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                ref={props.initialRef}
                                placeholder="Employee Name"
                                onChange={(event) => setName(event.target.value)}
                                value={name}
                            />
                        </FormControl>
                        <FormControl isRequired={true}>
                            <FormLabel>Job</FormLabel>
                            <Input
                                ref={props.initialRef}
                                placeholder="Employee Job"
                                onChange={(event) => setJob(event.target.value)}
                                value={job}
                            />
                        </FormControl>

                        <FormControl mt={4} isRequired={true}>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                placeholder="Employee Description"
                                onChange={(event) => setDescription(event.target.value)}
                                value={description}
                            />
                            <FormHelperText>
                                Description must have more than 10 characters.
                            </FormHelperText>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <ButtonGroup spacing="3">
                            <Button
                                onClick={closeHandler}
                                colorScheme="red"
                                type="reset"
                                isDisabled={isLoading}
                            >
                                Cancel
                            </Button>
                            <Button colorScheme="blue" type="submit" isLoading={isLoading}>
                                {props.employee ? "Update" : "Save"}
                            </Button>
                        </ButtonGroup>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

ManageEmployee.propTypes = {
    addEmployee: PropTypes.func.isRequired,
    updateEmployee: PropTypes.func.isRequired,
    employee: PropTypes.any,
    setEmployee: PropTypes.any,
    onClose: PropTypes.any,
    isOpen: PropTypes.any,
    initialRef: PropTypes.any,
}

export default connect(() => ({}), {addEmployee, updateEmployee})(ManageEmployee);