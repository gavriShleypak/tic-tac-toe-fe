import React, { Component } from 'react';
import Square from './Square';
import boardRow from "./CSS/Board.css";

class Board extends Component{

    constructor(props){
        super(props);
        this.state={
            turn: 'X',
        }
    }

    renderSquare(){
        return <Square/>
    }

    render(){
        return (
            <div>
                <div className={"status"}>{"Next Player is:" + this.state.turn}</div>
                <div className={"boardRow"}>
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className={"boardRow"}>
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className={"boardRow"}>
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
            </div>
            )
    }
}

export default Board;