import React from 'react';
import { connect } from 'react-redux';
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
        var precision = event.target.value;
        document.getElementById('precision').style.borderColor = ''
        document.getElementById('warning').innerHTML = ''
        if (precision.match(/\./g)){
            if (precision.match(/\./g).length == 1){
                let aux = precision.split('.')
                this.props.getPrecision(parseInt(aux[0].concat(aux[1]))/(10**aux[1].length))
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
                console.log(precision)
                this.props.getPrecision(parseInt(precision))
            }
        }
    }
    calculate(){
        console.log('PRECISION: ',this.props.precision)
        const options = {
            method: 'POST',
            headers: {
                    'X-Parse-Application-Id': 'Bvzncb1T1uvIDbNiT3WeyErviPbaGhlQ0MISiUUd',
                    'X-Parse-REST-API-Key': '7tJ9Y0DTXqOGG1otEzWd3O7c7MuDjhgqZu0Jh5Ko',
                    'Content-Type':'application/json'
            },
            body: JSON.stringify(
                {
                    arr: this.props.data.y,
                    fn : this.props.fn,
                    fP : this.props.fP,
                    precision : this.props.precision
                }
            )
        }
        fetch('https://calculatorapi.b4a.app/calculate/zero',options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            this.props.getZero(response);
        })
        
        
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
