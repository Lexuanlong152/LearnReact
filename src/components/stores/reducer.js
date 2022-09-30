import { ADD_JOB, SET_JOB, DELETE_JOB } from './constant';
const initState = {
    todos: [],
    todoInput: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_JOB:
            const newState = [...state.todos]
            newState.splice(action.payload, 1)
            // console.log('payload', action.payload)
            return {
                ...state,
                todos: newState

            }
        default:
            throw new Error('Invalid Action')
    }
}
export { initState };
export default reducer;