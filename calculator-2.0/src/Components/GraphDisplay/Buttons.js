import React from 'react';
import { connect } from 'react-redux';
import Model from './Model';
class Buttons extends React.Component {
    constructor(props){
        super(props)
        this.handleChangeFn = this.handleChangeFn.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
    }
   
    handleOrder(event){
         this.props.changeParameters(Array.from({length: parseInt(event.target.value)+1}, (a,b) => String.fromCharCode(97+b)), 'POL')
    }
        handleChangeFn(event){
            switch(event.target.value){
                case 'Pol':
                    this.props.changeParameters(Array.from({length: 2}, (a,b) => String.fromCharCode(97+b)), 'POL')
                    break;
                case 'Log':
                    this.props.changeParameters(Array.from({length: 4}, (a,b) => String.fromCharCode(97+b)), 'LOG')
                    break;
                case 'Exp':
                    this.props.changeParameters(Array.from({length: 3}, (a,b) => String.fromCharCode(97+b)), 'EXP')                    
                    break;
                case 'Pow':
                    this.props.changeParameters( Array.from({length: 3}, (a,b) => String.fromCharCode(97+b)), 'POW')
                    break;
                default:
                    this.props.changeOrder('NONE', [])
                    break;
                
            }
            
        }
        handleClick(){
            let aux = []
            document.getElementById('parameters').childNodes.forEach((v) => aux.push(v.value))
            if(this.props.fn === 'POL')
            {
                aux.pop()
            }
            
            
            const functionParameters = {
                min: document.getElementById('min').value,
                max: document.getElementById('max').value,
                p: aux,
                pace: document.getElementById('pace').value
            }
            
            this.props.receiveFunction(functionParameters)
            
            const reqOptions = {
                method: 'POST',
//                 mode: 'no-cors',
                headers: {
                    'X-Parse-Application-Id': 'Bvzncb1T1uvIDbNiT3WeyErviPbaGhlQ0MISiUUd',
                    'X-Parse-REST-API-Key': '7tJ9Y0DTXqOGG1otEzWd3O7c7MuDjhgqZu0Jh5Ko',
                    'Content-Type':'application/json'
//                     'Access-Control-Allow-Origin':'*'
                },
                body: JSON.stringify(functionParameters)
            

            }
                        
            fetch(`https://calculatorapi.b4a.app/calculate/${this.props.fn}`, reqOptions)
            .then((response) => response.json())
            .then((response) => 
            {
                console.log(response)
                switch(response){
                    case 'ERROR':
                        console.log('Parâmetros na forma errada.\nEx.: \'a = 1.\' ou \'a = 2\' ou \'a = 3.3\'')
                        break;
                    default:
                        this.props.receiveData(response)
                }
            })
        }
    render(){
        return <div>
            <div>
                <select onChange={this.handleChangeFn} name='functions'>
                    <option name='f' defaultValue>Functions</option>
                    <option name='polynome'>Pol</option>
                    <option name='logarithmic'>Log</option>
                    <option name='exponential'>Exp</option>
                    <option name='power'>Pow</option>
                </select>
                <div id='model'>
                    <Model />
                </div>
                
            </div>
            <div style={styles.parameters} id='parameters'>
                {this.props.fnParameters.map((p) => <input id={p} key={p} placeholder={p} />)}
                {(this.props.fn == 'POL') ? <select id = 's' onChange={this.handleOrder}>
                        <option name='1' defaultValue>{1}</option>
                        <option name='2' >{2}</option>
                        <option name='3' >{3}</option>
                        <option name='4' >{4}</option>
                        <option name='5' >{5}</option>
                        </select> : null}
            </div>
            <div style={styles.interval} id='interval'>
                <h4>Interval: </h4>
                <input id='min' placeholder='min'/>
                <input id='max' placeholder='max'/>
                <h4>Select pace: </h4>
                <select id='pace'>
                    <option name='pace'>Pace</option>
                    <option name='0.05'>0.05</option>
                    <option name='0.1'>0.1</option>
                    <option name='0.5'>0.5</option>
                    <option name='1'>1</option>
                </select>
            </div>
            <div>
                <button onClick={this.handleClick} >SUBMIT CHANGES</button>
            </div>
        </div>
    }
}

const styles={
    parameters: {
        display: 'flex',
        flexDirection: 'column',
        width: 100
    },
    parametersInput: {
        width: 100
    },
    selectOrder: {
        width: 100
    },
    interval: {
        display: 'flex',
        flexDirection: 'column',
        width: 100
    }
}
function mapStateToProps(state){
    return {
        pace: state.pace,
        fn: state.fn,
        fnParameters: state.fnParameters,
        order: state.order
    }
}
function mapDispatchToProps(dispatch){
    return {
        changeParameters: (p,f) => dispatch({type: 'CHANGE_PARAMETERS',newFn: f, newParams: p}),
        receiveData: (data) => dispatch({type: 'RECEIVE_DATA', x: data.x, y: data.y}),
        receiveFunction: (functionParameters) => dispatch({type: 'RECEIVE_FUNCTION', newFunction: functionParameters})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Buttons);
