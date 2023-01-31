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
                        <p>With the function and interval set on the <em>Display Graph</em> functionality, finds the zero of the function in the interval (if there is any). Based on Newton-Raphson method</p>
                    </div>
                </div>
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
