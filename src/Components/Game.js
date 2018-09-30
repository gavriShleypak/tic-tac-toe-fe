import React, { Component } from 'react';
import Board from './Board';

class Game extends Component{

  // need to check
  // onSquareSelected(x, y, player){
  //     if(this.props.postDetails(x, y, player)){
  //         return true;
  //     }
  //     else{
  //         this.invalidMove();
  //         return false;
  //     }
  // }

    constructor(props){
        super(props);
        this.state = {
            winner: false,
            sign: null
        }
    }

    IsWinner(json){
        if(json.winner !== 'N') {
            this.setState({
                winner: true,
                sign: json.winner
            });
        }
    }

    // show message informing the client it was bad move

    render(){
        return (
            <div className={"game"}>
                <div className={"game-board"}>
                    <Board onSquareSelected={this.props.postDetails}
                            isWinner={this.IsWinner}/>
                </div>
            </div>
        );
    }
}


export default Game;