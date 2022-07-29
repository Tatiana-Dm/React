import { Component } from "react";
import './TodoItemInfo.css';
import { HistoryItem } from "../HistoryItem/HistoryItem";

export class TodoItemInfo extends Component{
    render(){
        return(
            <div className="todoItemInfo"> 
                <h1 className="todoItemInfo-title">{this.props.item.title}</h1>
                    <textarea id="textarea" className="todoItemInfo-textarea" name="textarea" placeholder="Type here...">
                        {this.props.item.description}
                    </textarea>

                <div className="todoItemHistory">
                    <h2 className="todoItemHistory_title">History</h2>
                    <HistoryItem />
                    <HistoryItem /> 
                </div>
            </div>
        )
    }
}