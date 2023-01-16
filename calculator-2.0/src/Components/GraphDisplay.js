import React from 'react';
import { connect } from 'react-redux';
import Buttons from './GraphDisplay/Buttons';
import Graph from './GraphDisplay/Graph'
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
                <Graph/>
            </div>
        </div>
    }
}




const styles={
    Warper: {
        display: 'flex',
        flexDirection: 'row'
    },
    Parameters: {},
    Grid: {}
}

export default GraphDisplay;
