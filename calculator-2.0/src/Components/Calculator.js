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
        return <div style={styles.Calc} id='Calculator'>
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
    }
}
const styles={
    Calc: {
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        margin: 'auto',
        padding: '5px',
        border: 'solid',
        borderColor: 'green',
        width: 400
    },
    Disp: {
        border: 'solid',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        borderColor: 'red',
        width: 400,
        height: 75,
        alignItems: 'flex-end',
        fontSize: 50,
        fontFamily: 'digital-font-clock'
    },
    TopDisp: {
        border: 'solid',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderColor: 'blue',
        width: 400,
        height: 40,
        alignItems: 'flex-end',
        fontSize: 20,
        fontFamily: 'digital-font-clock'
    },
    Pad: {
        display: 'flex',
        flexDirection: 'column',
        border: 'solid',
        borderColor: 'black',
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
