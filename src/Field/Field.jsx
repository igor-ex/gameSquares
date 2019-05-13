import React from 'react';
import SquareLine from '../SquareLine/SquareLine';

export default class Field extends React.Component{
    render(){
        const { gameData, handleSquareClick } = this.props;
        const elements = this.props.stateArr.map(function(item, index){
            return (<div key = {index}>
                <SquareLine line  = {item}
                            gameData = {gameData}
                            handleSquareClick={handleSquareClick} />
            </div>)
        });
        return (
            <div className="field">
                {elements}
            </div>
        );
    }
}