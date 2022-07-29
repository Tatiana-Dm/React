import { Component } from "react";
import './TodoForm.css';

export class TodoForm extends Component{
    render(){
        return (
            <div>
                <div className="todoForm-line"></div>
                <form>
                    <input className="todoForm-input" type="text" placeholder="What you need to do?" />
                    <button className="todoForm-btn">+</button>
                </form>
            </div>
        )
    }
}