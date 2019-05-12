import React from 'react';

export default class Square extends React.Component{

    render(){
        const {gameData, handleSquareClick} = this.props;
        const backgroundcolor = gameData.randomId === this.props.id && !gameData.clicked ? '#FFFF00' : "#0000FF";
        return (
            <div>
                <div key = {this.props.id}
                     style={{backgroundColor: backgroundcolor, width : "50px", height: "50px", borderStyle: "solid"} }
                     onClick={() => handleSquareClick(this.props.id)}> </div>
            </div>
        );
    }
}
