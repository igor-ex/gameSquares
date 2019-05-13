import React from 'react';

export default class Square extends React.Component{

    render(){
        const {gameData, handleSquareClick} = this.props;
        const classes = ['square'];
        if (gameData.randomId === this.props.id) {
            console.log(gameData.clicked, 'clike');
            classes.push(gameData.clicked ? 'square_clicked' : 'square_fired');
            console.log(classes, 'classes');
        }
        //const backgroundColor = gameData.randomId === this.props.id && !gameData.clicked ? '#d44e54' : '#d44e547d';
        return (
            <div>
                <div key = {this.props.id}
                     className={classes.join(' ')}
                     onClick={() => handleSquareClick(this.props.id)}>

                </div>
            </div>
        );
    }
}
