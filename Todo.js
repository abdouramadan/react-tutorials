import React from 'react'

const Todo = ({todos, deleteTodo}) => {

    const getTodo = todos.map(data => {
            return (
                <div key={data.id} className='todo-item d-flex align-items-center flex-wrapper p-0 p-3 shadow-sm mb-3 bg-light'>
                    <p className='w-100 d-flex p-0 m-0'>{data.content}</p>
                    <button onClick={()=> {deleteTodo(data.id)}} className='btn btn-danger text-capitalize ml-2'>delete</button>
                </div>
            )
        })

    return (
        <div className='todos-content'>
            {/* todo list */}
            <div className='todo-list'> {getTodo} </div>
        </div>
    )
}

export default Todo
