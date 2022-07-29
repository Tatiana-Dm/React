import './Todo.css';
import { Component } from 'react';
import { TodoForm } from './components/ContainerComponents/TodoForm/TodoForm';
import { TodoItem } from './components/ContainerComponents/TodoItem/TodoItem';
import { TodoItemInfo } from './components/PresentationComponents/TodoItemInfo/TodoItemInfo';
import { TodoSearchItem } from './components/ContainerComponents/TodoSearchItem/TodoSearchItem';
import { TodoEmptyPresentation } from './components/PresentationComponents/TodoEmptyPresentation/TodoEmptyPresentation';


export class Todo extends Component {
    state = {
        list : [
            {id: '1', title: 'Water Plants', description: 'in the kitchen', completed: false, history: 
                [{field: '', action: '', prevValue: '', currentValue: '', appliedAt: ''}], selected: false
            },
            {id: '2', title: 'Pack the bag', description: 'preparation for trip to London', completed: true, history: 
                [{field: '', action: '', prevValue: '', currentValue: '', appliedAt: ''}], selected: false
            },
            {id: '3', title: 'Charge laptop', description: 'preparation for trip to London', completed: false, history: 
                [{field: '', action: '', prevValue: '', currentValue: '', appliedAt: ''}], selected: false
            },
            {id: '4', title: 'Post homeworks to Hillel Course', description: 'React Group from 30.04.2022', completed: false, history: 
                [{field: '', action: '', prevValue: '', currentValue: '', appliedAt: ''}], selected: false
            },
            {id: '5', title: 'Make backup of HDD', description: 'Use TimeMachine for that', completed: false, history: 
                [{field: '', action: '', prevValue: '', currentValue: '', appliedAt: ''}], selected: false
            }
        ]
    };

    onItemCompleted = (id) => {

        let todoItem = this.state.list.find(item => item.id === id) ;
        // console.log(todoItem);

        let updatedItem = {...todoItem, completed: !todoItem.completed};
        // console.log(updatedItem)

        this.setState({
            list: this.state.list.map(item => item.id === id ? updatedItem : item)
        }, () => console.log(this.state.list[0].completed))
    }

    onItemSelected = (id) => {

        let todoItem = this.state.list.find(item => item.id === id);
        // console.log(todoItem);
        
        let updatedItem = {...todoItem, selected: !todoItem.selected};
        // console.log(updatedItem.selected);

        this.setState({ 
            list: this.state.list.map(item => item.selected = false)
        })

        this.setState({
            list: this.state.list.map(item => item.id === id ? updatedItem : item)
        })
    }

    render(){
        return (
            <div className='todo-container'>
                <div className='todo-containerComponents'>
                    <h1 className='todo-title'>Todos</h1>
                    <TodoSearchItem />

                    {this.state.list.map(item =>
                        <TodoItem
                        key = {item.id}
                        item = {item}
                        onItemCompleted = {this.onItemCompleted}
                        onItemSelected = {this.onItemSelected}/>)
                    }

                    <TodoForm />
                </div>
                <div className='todo-presentationComponents'>
                    
                    {this.state.list.map(item => item.selected &&
                                <TodoItemInfo
                            key = {item.id}
                            item = {item}/>
                    )}

                    { this.state.list.every(item => !item.selected) ? <TodoEmptyPresentation/> : <></> }                  
                </div>        
            </div>
        )
    }
}