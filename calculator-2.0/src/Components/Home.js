import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div id='home' className={'home'}>
            <h1 style={styles.title} >Home Page</h1>
            <div style={styles.warper}>
                <div style={styles.containers}>
                    <div id='text'>
                        <h2>Calculator</h2>
                        <p>Simple calculator with basic operations: addition, subtraction, division and product</p>
                    </div>
                </div>
                <div style={styles.containers}>
                    <div id='text'>
                        <h2>Display Graph</h2>
                        <p>Shows a scatter plot based on a function (power, polynome, exponential or logarithm) and it's parameters</p>
                    </div>
                </div>
                <div style={styles.containers}>
                    <div id='text'>
                        <h2>Find Zeros</h2>
                        <p>Finds a zero from the function and it's parameters (if tere is any) based on Newton-Raphson's method</p>
                    </div>
                </div>
            </div>
            
                <div id='notes'>
                    <h4>Info: </h4>
                    <ul>
                        <li>Front End made in React hosted in <a id ='anchor' href='https://firebase.google.com/' target='_blank'>Firebase</a></li>
                        <li>Back End made in Express.js hosted in <a id='anchor' href='https://www.back4app.com/'>Back4app</a></li>
                    </ul>
                </div>
        </div>
    }
}

const styles = {
    warper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containers: {
        margin: 50,
        selfAlign: 'center',
        border: 'solid 2px',
        borderRadius: 5,
        padding: 10
    },
    title: {
        alignSelf: 'center',
        border: 'solid 2px',
        borderRadius: 5,
        padding: 20
    }
}

export default Home;
