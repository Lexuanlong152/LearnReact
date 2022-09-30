import { useContext, useRef } from 'react'
import Context from './Context';
import { addJobs, setJobs, deleteJobs } from './actions'
function Global() {

    const [state, dispatch] = useContext(Context)
    const { todos, todoInput } = state
    console.log(todos)
    const RefName = useRef()

    const handleAdd = () => {
        dispatch(addJobs(todoInput))
        dispatch(setJobs(''))

        RefName.current.focus()

    }


    return (
        <div>
            <input
                ref={RefName}
                value={todoInput}
                placeholder='Enter todo ....'
                onChange={(e) => dispatch(setJobs(e.target.value))}
            />
            <button onClick={handleAdd}>
                Add
            </button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <span style={{ marginLeft: 20 }} onClick={() => dispatch(deleteJobs(index))}
                        >&times;</span>
                    </li>
                ))}
            </ul>

        </div >
    );
}
export default Global;