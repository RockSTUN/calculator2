import React from 'react';
import { connect } from 'react-redux';
import newtonRaphson from './findZero'
class Zeros extends React.Component {
    constructor(props){
        super(props);
        this.calculate = this.calculate.bind(this)
        this.handlePrecision = this.handlePrecision.bind(this)
        this.checkZero = this.checkZero.bind(this)
    }
    checkZero(y){
        console.log(y)
        return (y.every((value) => value > 0) || y.every((value) => value < 0)) ? false : true
    }
    handlePrecision(event){
        const precision = event.target.value
        console.log(document.getElementById('precision').style.borderColor == 'red')
        document.getElementById('precision').style.borderColor = ''
        document.getElementById('warning').innerHTML = ''
        if (precision.match(/\./g)){
            if (precision.match(/\./g).length == 1){
                let aux = precision.split('.')
                this.props.getPrecision(parseInt(aux[0].concat(aux[1])/(10**aux[1].length)))
            }
            else{
                document.getElementById('precision').style.borderColor = 'red'
                document.getElementById('warning').innerHTML = 'Apenas 1 ponto'
            }
        }
        else{
            if (precision.match(/\D/)){
                document.getElementById('precision').style.borderColor = 'red'
                document.getElementById('warning').innerHTML = 'Apenas números e 1 ponto'
            }
            else{
                this.props.getPrecision(parseInt(precision))
            }
        }
    }
    calculate(){
        //verifica se tem zero no intervalo
        if (this.checkZero(this.props.data.y)){
        this.props.getZero(newtonRaphson(this.props.fn,this.props.fP, this.props.precision))    
        }
        
    }
    render(){
        return <div id='Zeros'>
        <h1>Zeros</h1>
            <div>
                <div id='zeroFunction'>
                <h3>Function: {this.props.fn}</h3>
                <input id='precision' placeholder='Precision' onChange={this.handlePrecision}/>
                <h5 id='warning'></h5>
                    <ul>{this.props.fP ? Object.keys(this.props.fP).map((k) => <li key={k}>{`${k} : ${this.props.fP[k]}`}</li>) : null}</ul>
                </div>
                <div id='calculate'>
                    <button onClick={this.calculate} className={'btn btn-dark'}>Calculate</button>
                </div>
                <h3>{`X = ${this.props.zero}`}</h3>
            </div>
        </div>
    }
}

function mapStateToProps(state){
    return {
        fP: state.fP,
        fn: state.fn,
        data: state.data,
        precision: state.precision,
        zero: state.zero
    }
}
function mapDispatchToProps(dispatch){
    return {
        getZero : (z) => dispatch({type: 'GETZERO' , zero: z}),
        getPrecision: (prec) => dispatch({type: 'CHANGE_PRECISION', precision: prec})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Zeros);
