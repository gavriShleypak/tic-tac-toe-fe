import {applicationManager} from  './Manager'
import Game from "../Components/Game";
import React, { Component } from 'react';

class GameManager{

    constructor() {
        this.HttpManager = applicationManager;
    }

    getGameCom(){
        return <Game postDetails={this.postDetails.bind(this)}/>
    }

    postDetails(x, y, player, squareVAlidMove, BoardNextTurn){
       debugger;
        this.HttpManager.HttpClient.post({
            winner: 'N',
            x: x,
            y: y,
            validMove: false,
            currentPlayer: player,
            status: "playing",
        }).then(
           (response )=> {
               debugger; // setting the current move according to answer from BE
               if(response .validMove === true){
                   squareVAlidMove(response.currentPlayer);
                   if(response.winner !=='N'){
                          this.declareWinner(response.currentPlayer);
                   }
                   else{
                       BoardNextTurn();
                   }

               }
               else{
                   console.log("invalid move ");
               }


           }
       );
    }


    /// need to declare the winner
    declareWinner(player){
        console.log("theWinner is: " + player);
    }
}

export let gameManager = new GameManager();