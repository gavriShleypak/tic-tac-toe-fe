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

    nextTurn(){
        if(this.state.turn === 'X'){
            this.setState({turn: 'O'});
        }
        else{
            this.setState({turn:'X'});
        }
    }


    onChangeSquareStatus(x, y, squareValidMove) {
       debugger;
        this.props.onSquareSelected(x, y, this.state.turn, squareValidMove, this.nextTurn.bind(this));
        ///        .then(
        ///        (response)=>{
        ///            if(response.validMove){
        ///                squareValidMove(this.state.turn);
        ///                return response;
        ///            }else{
        ///                throw new Error('Bad Move')
        ///            }
        ///        }
        ///    ).catch((e)=>{
        ///        console.log(e.message);
        ///    }).then((response)=>{
        ///        this.props.isWinner(response);
        ///    });
    }

    getTurn(){
        return this.state.turn;
    }

    renderSquare(x, y){
        return <Square x={x} y={y} onChangeSquareStatus={this.onChangeSquareStatus.bind(this)}
                       getTurn={this.getTurn.bind(this)}/>
    }

    render(){
        return (
            <div>
                <div className={"status"}>{"Next Player is:" + this.state.turn}</div>
                <div className={"boardRow"}>
                    {this.renderSquare(0,0)}
                    {this.renderSquare(0,1)}
                    {this.renderSquare(0,2)}
                </div>
                <div className={"boardRow"}>
                    {this.renderSquare(1,0)}
                    {this.renderSquare(1,1)}
                    {this.renderSquare(1,2)}
                </div>
                <div className={"boardRow"}>
                    {this.renderSquare(2,0)}
                    {this.renderSquare(2,1)}
                    {this.renderSquare(2,2)}
                </div>
            </div>
            )
    }
}

export default Board;