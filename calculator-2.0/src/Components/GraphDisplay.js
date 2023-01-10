import React from 'react';
import { connect } from 'react-redux';
import Buttons from './GraphDisplay/Buttons';
class GraphDisplay extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div style={styles.Warper} id='graphWarper'>
            <div style={styles.Parameters} id='graphParameters'>
                PARAMETERS
                <Buttons/>
            </div>
            <div style={styles.Grid} id='graph grid'>
                GRID
            </div>
        </div>
    }
}

function mapStateToProps(state){
    return {
        leftInterval: state.leftInterval,
        rightInterval: state.rightInterval,
        pace: state.pace,
        fns: state.fns
    }
}



const styles={
    Warper: {},
    Parameters: {},
    Grid: {}
}

export default connect(mapStateToProps, null)(GraphDisplay);
