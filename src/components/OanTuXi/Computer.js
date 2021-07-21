import React, { Component } from 'react';
import {connect} from 'react-redux';

class Computer extends Component {
    render() {
        return (
            <div className="player computer">
                <div className="think">
                    <img className="w-100" src={this.props.computerSelected.img} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img style={{width: 200, height: 200}} src="./img/playerComputer.png" alt="..."/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computerSelected: state.stateOanTuXi.computerSelected,
    }
}

export default connect(mapStateToProps)(Computer);