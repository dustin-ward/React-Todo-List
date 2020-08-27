import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#444',
            color: '#999',
            padding: '10px',
            borderBottom: '1px #555 dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" 
                        style={{marginRight: '10px'}} 
                        checked={completed} 
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    {title}
                    <button 
                        onClick={this.props.delTodo.bind(this, id)}
                        style={btnStyle}
                    >X</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
