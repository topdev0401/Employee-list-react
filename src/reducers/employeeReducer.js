import { 
    ADD_EMPLOYEE, 
    UPDATE_EMPLOYEE, 
    DELETE_EMPLOYEE, 
    GET_EMPLOYEE 
} from "../actions/type";

const initialState = {
    employees: []
}

const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_EMPLOYEE:
            return {
                employees: [...state.employees, action.payload]
            }
        case UPDATE_EMPLOYEE:
            return {
                employees: state.employees.map((employee, index) => 
                        ((index === action.payload.index) ? action.payload.employee : employee))
            }
        case DELETE_EMPLOYEE:
            return {
                employees: state.employees.filter((employee, index) => (index !== action.payload.index))
            }
        case GET_EMPLOYEE:
            return {
                ...state
            }
        default :
            return state;
    }
}

export default employeeReducer;