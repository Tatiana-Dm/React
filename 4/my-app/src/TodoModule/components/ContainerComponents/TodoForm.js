import { Component } from 'react';
import './TodoForm.css';

export class TodoForm extends Component {
    render() {
        return (
            <form className="SearchedTodo">
                <h1>Todos</h1>
                <input type="text" placeholder='Search'/>
            </form>
        )
    }
}