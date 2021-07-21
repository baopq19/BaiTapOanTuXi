import React, { Component } from 'react'
import './OanTuXi.css';
import Player from './Player';
import Computer from './Computer';
import Result from './Result';

import { connect } from 'react-redux';

class OanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi">
                <div className="container">
                    <div className="row">
                        <div className="col col-4">
                            <Player />
                        </div>
                        <div className="col col-4 text-center">
                            <Result />
                            <button onClick={() => {this.props.playGame()}} className="mt-5 btn btn-success">Play game</button>
                        </div>
                        <div className="col col-4">
                            <Computer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {

            let count = 0;

            let randomComputerSelect = setInterval(() => {
                dispatch({
                    type: 'RANDOM',
                })

                count++;
                if(count === 19){
                    clearInterval(randomComputerSelect);
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            }, 100)

        }
    }
}

export default connect(null, mapDispatchToProps) (OanTuXi);