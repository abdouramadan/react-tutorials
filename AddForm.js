import React from 'react'

class AddForm extends React.Component {

    state = {
        todos: [],
    }

    addTodo = (e) => {
        e.preventDefault()
        let id      = Math.random()
        let data    = {content: e.target['todoVal'].value, id: id}
        let arr     = [...this.state.todos, data]
        this.props.addTodos(arr)
        this.setState({
            todos: arr
        })
    }

    render() {
        return (
            <form className='form-inline d-flex mb-3' onSubmit={this.addTodo}>
                <input type="text" id='todoVal' className='form-control' placeholder='Add Todo' />
                <button className='btn btn-dark text-capitalize ml-2'>add todo</button>
            </form>
        )
    }
}

export default AddForm
