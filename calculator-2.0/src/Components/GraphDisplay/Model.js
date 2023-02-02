import React from 'react';
import { connect } from 'react-redux';

class Model extends React.Component{
    constructor(props){
        super(props);
        this.handlePol = this.handlePol.bind(this);
        this.handleFunction = this.handleFunction.bind(this);
    }
    handlePol(paramet){
        return (this.props.fnParameters.indexOf(paramet) == this.props.fnParameters.length-1) ? <code key={paramet}>{` ${paramet}`}</code> : <code key={paramet}>{` ${paramet}.x`}<sup>{(this.props.fnParameters.length - this.props.fnParameters.indexOf(paramet)-1 == 1) ? '' : this.props.fnParameters.length - this.props.fnParameters.indexOf(paramet)-1 }</sup>{' +'}</code>
        
    }
    handleFunction(){
        switch(this.props.fn){
            case 'POL':
                return <code>{'f(x) ='}{this.props.fnParameters.map(this.handlePol)}</code>
            case 'EXP':
                return <code>{'f(x) = '}{`${this.props.fnParameters[0]}.e`}<sup>{`x.${this.props.fnParameters[1]}`}</sup>{` + ${this.props.fnParameters[2]}`}</code>
            case 'LOG':
                return <code>{'f(x) = '} {this.props.fnParameters[0]}{'.(log'}<sub>{this.props.fnParameters[1]}</sub>{'x)'}<sup>{this.props.fnParameters[2]}</sup>{` + ${this.props.fnParameters[3]}`}</code>
            case 'POW':
                return <code>{'f(x) = '} {`${this.props.fnParameters[0]}.x`}<sup>{this.props.fnParameters[1]}</sup> {` + ${this.props.fnParameters[2]}`}</code>
            default:
                return <div>{'None Selected'}</div>
        }
    }
    render(){
        return <div id='function'>
            {this.handleFunction()}
        </div>
    }
}

const styles= {}

function mapStateToProps(state){
    return {
        fn: state.fn,
        fnParameters: state.fnParameters
    }
}

export default connect(mapStateToProps,null)(Model);
