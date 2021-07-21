import React, { Component } from 'react';
import {connect} from 'react-redux';

class Result extends Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="text-warning text-center my-4">{this.props.result}</h1>
                <h2 className="text-success">Số bàn thắng: <span>{this.props.won}</span></h2>
                <h2 className="text-success">Số bàn đã chơi: <span>{this.props.played}</span></h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        result: state.stateOanTuXi.result,
        won: state.stateOanTuXi.won,
        played: state.stateOanTuXi.played
    }
}
export default connect(mapStateToProps)(Result);