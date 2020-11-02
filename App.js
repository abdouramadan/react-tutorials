import React, { Component } from 'react'
import Todo from './components/Todo'
import AddForm from './components/AddForm'

class App extends Component {
    
    state = {
        todos: [],
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })

        this.setState({
            todos: todos
        })
    }

    getTodos = (todos) => {
        this.setState({
            todos: todos
        })
    }

    render() {
        return (
            <div className='app-wrapper d-flex align-items-center flex-column justify-content-center'>
                {/* <form className='form-inline d-flex mb-3' onSubmit={this.addTodo}>
                    <input type="text" id='todoVal' className='form-control' placeholder='Add Todo' />
                    <button className='btn btn-dark text-capitalize ml-2'>add todo</button>
                </form> */}
                <AddForm addTodos={this.getTodos}/>
                <Todo    todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default App
