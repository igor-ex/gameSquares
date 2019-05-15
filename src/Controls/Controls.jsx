import React from 'react';

export default class Controls extends React.Component {
    render() {
        const {
            startGame,
            stopGame,
            setInterval,
            interval,
            pcScore,
            userScore,
            result
        } = this.props;
        return (
            <div className="controls">
                <button onClick={startGame}>Start</button>
                <button onClick={stopGame}>Stop</button>
                <input type="range"
                       min="500"
                       max="3000"
                       value={interval}
                       onChange={setInterval}
                /> {interval}
                <div>PC score: {pcScore}</div>
                <div>User score: {userScore}</div>
                <div>Result: {result}</div>
            </div>
        );
    }
}