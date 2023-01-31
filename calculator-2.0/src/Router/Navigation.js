import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div id='nani' style={styles.wraper}>
            <NavLink id='pages' style={styles.comps} to='/'>Home</NavLink>
            <NavLink id='pages' style={styles.comps} to='/Calculator'>Calculator</NavLink>
            <NavLink id='pages' style={styles.comps} to='/GraphDisplay'>Display Graph</NavLink>
            <NavLink id='pages' style={styles.comps} to='/Zeros'>Find Zeros</NavLink>
        </div>
    }
}

const styles={
    wraper: {
        display: 'flex',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        margin: 20,
        borderWidth: 20,
        borderColor: 'black',
        borderRadius: 4
    },
    comps: {
        margin: 20,
        color: 'green',
        textShadow: '1px 1px',
        textDecoration: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
        border: 'solid green 3px',
        padding: 6
    }
}

export default Navigation;
