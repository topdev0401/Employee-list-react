import {
    ADD_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE,
    GET_EMPLOYEE
} from './type';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';
export const addEmployee = (employee) => dispatch => {
    axios.post(`${SERVER_URL}/employees`,{
        ...employee
    })
    .then(res => {
        //if(!res.data.status ) return ; // I return the boolean status value in the backend endpoint.
    })
    dispatch({
        type: ADD_EMPLOYEE,
        payload: { ...employee }
    })
}

export const updateEmployee = (id, employee) => dispatch => {
    axios.put(`${SERVER_URL}/employees`, {
        ...employee,
        id: id,                         //in the frontend, the id is index of employee. but in full-stack development, we can use database _id/
    })
    .then(res => {
        //if(!res.data.status) return ;
    })
    dispatch({
        type: UPDATE_EMPLOYEE,
        payload: {
            index: id,
            employee: employee
        }
    })
}

export const deleteEmployee = (id) => dispatch => {
    axios.delete(`${SERVER_URL}/employee`, {
        id: id
    })
    .then(res => {
        //if(!res.data.status) return ;
    })
    dispatch({
        type: DELETE_EMPLOYEE,
        payload: {
            index: id,
        }
    })
}

export const getEmployee = () => dispatch => {
    axios.get(`${SERVER_URL}/employee`)
    .then(res => {
        //if(!res.data.status) return ;
    })
    dispatch({
        type: GET_EMPLOYEE,
        payload: {
            type: GET_EMPLOYEE,
            payload: {}
        }
    })
}