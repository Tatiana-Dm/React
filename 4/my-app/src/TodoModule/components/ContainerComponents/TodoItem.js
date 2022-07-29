import { Component } from 'react';
import './TodoItem.css';

export class TodoItem extends Component {
    render() {
        return (
                <li className={this.props.item.completed ? 'done' : 'default'}
                    onClick={(e) => this.props.addСurrentItem(this.props.item.id, e)}>
                    <div className='buttonWrapper'>&#10004;</div>
                    <h3>{this.props.item.title}</h3>
                    <p>{this.props.item.description}</p>
                </li>);
    }
}

