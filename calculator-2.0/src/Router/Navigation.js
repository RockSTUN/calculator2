import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <ul>
            <li><NavLink to='/Calculator'>Calculator</NavLink></li>
            <li><NavLink to='/Zeros'>Find Zeros</NavLink></li>
            <li><NavLink to='/GraphDisplay'>Display Graph</NavLink></li>
        </ul>
    }
}

export default Navigation;
