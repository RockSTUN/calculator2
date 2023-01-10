import React from 'react';
import { connect } from 'react-redux';

class GraphDisplay extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div style={styles.} id='graphWarper'>
            <div style={styles.} id='graphParameters'>
                PARAMETERS
            </div>
            <div style={styles.} id='graph grid'>
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
        fns: state.fns,
        data: state.data
    }
}



export default connect(mapStateToProps, null)(GraphDisplay);
