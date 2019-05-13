import React from 'react';
import Field from '../Field/Field';
import Controls from "../Controls/Controls";
import '../style.css';

export default class App extends React.Component{
    state = {
        arr : function() {
            let arr = [[],[],[],[],[],[],[],[],[],[]];
            let id = 0;
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    arr[i][j] = id;
                    id++;
                }
            }
            return arr;
        },
        interval: 1000,
        gameData: {
            randomId: null,
            clicked: false
        },
        userScore: 0,
        pcScore: 0,
        result: ''
    };

    intervalId = null;
    gameIsOver = true;

    startGame = () => {
        if (!this.gameIsOver) {
            return;
        }
        this.gameIsOver = false;
        this.setState(()=>{
            return {
                gameData: {
                    randomId: this.generateValue(),
                    clicked: false
                },
                pcScore: 0,
                userScore: 0,
                result: ''
            }
        });
        this.intervalId = setInterval(this.executeGameIteration, this.state.interval);
    };

    executeGameIteration = () => {
        this.checkGameIterationResult();
        if (this.gameIsOver) {
            this.stopGame();
            return;
        }
        this.startGameIteration();
    };

    stopGame = () => {
        this.gameIsOver = true;
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.setState(()=>{
            return {
                gameData: {
                    randomId: null,
                    clicked: false
                },
            }
        });
    };

    startGameIteration = () => {
        const randomInt = this.generateValue();
        this.setState(()=>{
            return {
                gameData: {
                    randomId: randomInt,
                    clicked: false
                }
            }
        });
    };

    checkGameIterationResult = () => {
        if (!this.state.gameData.clicked) {
            return this.scorePlus(this.roles.PC);
        }
        return false;
    };

    handleSquareClick = id => {
        if (this.gameIsOver) {
            return;
        }
        if (this.state.gameData.randomId === id && !this.state.gameData.clicked) {
            this.setState(() => {
                return {
                    gameData: {
                        clicked: true
                    }
                }
            });
            this.scorePlus(this.roles.USER);
        } else {
            this.scorePlus(this.roles.PC);
        }
    };

    scorePlus = (role) => {
        const scores = {
            pcScore: this.state.pcScore,
            userScore: this.state.userScore
        };
        scores[role]++;
        this.setState(state => {
            return {
                [role]: scores[role]
            }
        });
        return this.checkGameEnd(scores);
    };

    gameThreshold = 10;
    roles = Object.freeze({
        PC: 'pcScore',
        USER: 'userScore'
    });

    checkGameEnd = (scores) => {
        if (scores.pcScore === this.gameThreshold || scores.userScore === this.gameThreshold) {
            let result;
            if (scores.pcScore === this.gameThreshold) {
                result = 'PC won! Looser';
            } else {
                result = 'You\'re the winner. Congratulations'
            }
            this.stopGame();
            this.setState(() => {
                return {result}
            });
            return true;
        }
        return false;
    };

    generateValue() {
        let rand = 0 - 0.5 + Math.random() * (100 - 0 + 1);
        rand = Math.round(rand);
        return rand
    }

    setInterval = (ev) => {
        const interval = parseInt(ev.target.value);
        this.setState(() => {
            return {interval: interval}
        });
    };

    render(){
        const props = {
            startGame: this.startGame,
            stopGame: this.stopGame,
            setInterval: this.setInterval,
            interval: this.state.interval,
            pcScore: this.state.pcScore,
            userScore: this.state.userScore,
            result: this.state.result
        };
        return (
            <div className="container">
                <Controls {...props}/>
                <Field
                    stateArr = {this.state.arr()}
                    gameData = {this.state.gameData}
                    handleSquareClick={this.handleSquareClick}
                />
            </div>
        );
    }
}