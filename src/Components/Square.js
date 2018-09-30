import React, { Component } from 'react';
import square from "./CSS/Square.css"
class Square extends Component{

    constructor(props){
      super(props);



      this.state = {
          value:' ',
          x: null,
          y: null,
      };
    }

    isSucssesMove(_playerSign){
        this.setState({
            value: _playerSign,
        })
    }

    onSquareClick(){
        debugger;
        this.props.onChangeSquareStatus(this.state.x, this.state.y,this.isSucssesMove.bind(this))
    }

    render(){
        debugger;
        this.state.x = this.props.x;

        this.state.y = this.props.y;

        return(
            <button className={"square"}
            onClick={()=>this.onSquareClick()}>
                {this.state.value}
            </button>
        )
    }
}

export default Square;