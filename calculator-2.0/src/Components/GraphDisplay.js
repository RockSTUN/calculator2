import React from 'react';
import { connect } from 'react-redux';
import Buttons from './GraphDisplay/Buttons';
import Graph from './GraphDisplay/Graph'
class GraphDisplay extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div id='graphWarper'>
            <h1 style={styles.title}>Display Graph</h1>
            
            <h2 style={{ fontWeight: 'bold', marginLeft: 10 }}>PARAMETERS: </h2>
            <div style={styles.Parameters} id='graphParameters'>
                <Buttons show={true}/>
            </div>
            <div style={styles.Grid} id='graph grid'>
                <Graph/>
            </div>
            <div id='plots'>
            </div>
        
        </div>
    }
}




const styles={
    Parameters: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20
    },
    Grid: {},
    title: {
        alignSelf: 'center',
        border: 'solid 2px',
        borderRadius: 5,
        padding: 20
    }
}

export default GraphDisplay;
