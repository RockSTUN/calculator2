import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Zeros from '../Components/Zeros';
import GraphDisplay from '../Components/GraphDisplay';
import Calculator from '../Components/Calculator';
import Home from '../Components/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from '../Redux'
const store = createStore(reducer);

class Main extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <Provider store={store}>
            <Routes>
                <Route path={'/Calculator'} element={<Calculator/>} />
                <Route path={'/Zeros'} element={<Zeros/>}/>
                <Route path={'/GraphDisplay'} element={<GraphDisplay/>}/>
                <Route path={'/'} element = {<Home />}/>
            </Routes>
        </Provider>
    }
}

export default Main;
