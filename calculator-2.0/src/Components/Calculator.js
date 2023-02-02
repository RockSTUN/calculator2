import React from 'react';
import { connect } from 'react-redux';
import Button from './Calculator/Buttons';
import * as d3 from 'd3';

class Calculator extends React.Component {
    constructor(props){
        super(props);
//         console.log(props)
    }
    render(){
        return <div>
            <h1 style={styles.title}>Calculator</h1>
            <div style={styles.Calc} id='Calculator'>
            <div style={styles.TopDisp}>{this.props.topdisp}</div>
            <div id='displayer' style={styles.Disp}>{this.props.disp}</div>
            <div style={styles.Pad}>
                <div style={styles.row1}>
                    <Button b={'AC'}/><Button b={'\/'}/><Button b={'x'} />
                </div>
                <div style={styles.row2}>
                    <Button b={'7'}/><Button b={'8'} /><Button b={'9'} /><Button b={'-'} />
                </div>
                <div style={styles.row3}>
                    <Button b={'4'} /><Button b={'5'} /><Button b={'6'} /><Button b={'+'}/>
                </div>
                <div style={styles.row4}>
                    <div style={styles.sub}>
                        <div style={styles.subrow1}>
                            <Button b={'1'} /><Button b={'2'} /><Button b={'3'} />
                        </div>
                        <div style={styles.subrow2}>
                            <Button b={'0'} /><Button b={'.'} />
                        </div>
                    </div>
                    <div style={styles.plus}>
                        <Button b={'='}/>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    }
}
const styles={
    Calc: {
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        margin: 'auto',
        border: 'solid 5px',
        borderColor: 'black',
        backgroundColor: 'darkgreen',
        width: 400,
        borderRadius: 10
    },
    Disp: {
        border: 'solid 4px',
        margin: 10,
        paddingRight: 10,
        paddingBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        borderColor: 'black',
        width: 375,
        height: 75,
        alignItems: 'flex-end',
        fontSize: 50,
        fontFamily: 'digital-font-clock',
        color: 'black',
        textShadow: '1px 1px black',
        backgroundColor: 'grey'
    },
    TopDisp: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        border: 'solid 4px',
        borderColor: 'black',
        width: 375,
        height: 40,
        marginTop: 10,
        paddingBottom: 40,
        paddingRight: 10,
        alignItems: 'flex-end',
        fontSize: 24,
        fontFamily: 'digital-font-clock',
        color: 'black',
        textShadow: '1px 1px black',
        backgroundColor: 'green'
    },
    Pad: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        height: 400,
        width: 400
    },
    row1: {
        display:'flex',
        height: '20%'
    },
    row2: {
        display:'flex',
        height: '20%'
    },
    row3: {
        display:'flex',
        height: '20%'
    },
    row4: {
        display:'flex',
        height: '40%'
    },
    subrow1: {
        display: 'flex',
        height: '100%'
    },
    subrow2: {
        display: 'flex',
        height: '100%'
    },
    sub: {
        display: 'flex',
        flexDirection: 'column',
        flex: 3
    },
    plus: {
        display: 'flex',
        flex: 1
    },
    title: {
        alignSelf: 'center',
        border: 'solid 2px',
        borderRadius: 5,
        padding: 20
    }
    
}


function mapStateToProps(state){
    return {
        disp: state.disp,
        topdisp: state.topdisp
    }
}
// function mapDispatchToProps(dispatch){
//     return {
//         
//     }
// }

export default connect(mapStateToProps,null)(Calculator);
