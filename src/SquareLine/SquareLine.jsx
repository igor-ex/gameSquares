import React from 'react';
import Square from '../Square/Square';

export default class SquareLine extends React.Component{
    render(){
        const { gameData,handleSquareClick } = this.props;
        const elements = this.props.line.map(function(item){
            return (
                <div key = {item}>
                    <Square id = {item}
                            gameData = {gameData}
                            handleSquareClick={handleSquareClick} />
                </div>
            );
        });
        return (
            <div className="field__line">
                {elements}
            </div>
        );
    }
}


