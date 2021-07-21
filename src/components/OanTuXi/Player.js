import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="player">
                <div className="think">
                    <img className="w-100" 
                    src={this.props.selections.find(selection => selection.selected === true).img}
                    alt="abccc" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{width: 200, height: 200}} src="./img/player.png" alt="abccc"/>

                <div className="row">
                    {
                        this.props.selections.map((selection) => {
                            let border = {};
                            if(selection.selected){
                                border = {border: '4px solid green'}
                            }

                            return <div className="col col-4" key={selection.id}>
                            <button onClick={() => {this.props.select(selection.id);}} style={border} className="btnSelection">
                                <img src={selection.img} alt="abccc" />
                            </button>
                        </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selections: state.stateOanTuXi.selections,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        select: (id) => {
            dispatch({
                type: 'SELECT',
                id,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Player)
