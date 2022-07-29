import { Component } from "react";
import './HistoryItem.css';

export class HistoryItem extends Component{
    render(){
        return (
            <>
                <div className="historyItem">
                    <div className="historyItem-line"></div>
                    <div className="historyItem-info">
                        <div className="historyItem-text">Change history of selected Todo-item</div>
                        <div className="historyItem-time">date and time</div>
                    </div>
                </div>   
            </>
        )
    }
}