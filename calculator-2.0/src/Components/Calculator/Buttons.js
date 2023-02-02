import React from 'react';
import { connect } from 'react-redux';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.handleStyle = this.handleStyle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleArithmetic = this.handleArithmetic.bind(this);
    }
    handleArithmetic(){
        let numbs = this.props.disp.split(/[-|+|x|/]/).map((n) => {
            if (n.split('.').length == 1){
                return parseInt(n)
            }
            else{
                let aux = parseInt(n.split('.')[0]+ n.split('.')[1])
                return aux/(10**n.split('.')[1].length)
            }
        }).filter((el) => el ? true : false)
        let ops = this.props.disp.split(/\d+/).filter((op) => (op == '.' || op == '') ? false: true)
        let ans = numbs[0]
        if (this.props.disp[0] == '-'){
            ans = -ans
            ops.shift()
        }
        for (let i =1;i<numbs.length; i++){
            switch(ops[i-1]){
                case '+':
                    ans+=numbs[i];
                    break;
                case '-':
                    ans-=numbs[i]
                    break;
                case '\/':
                    ans = ans/numbs[i];
                    break;
                case 'x':
                    ans = ans*numbs[i];
                    break;
                case '+-':
                    ans = ans-numbs[i];
                    break;
                case 'x-':
                    ans = -ans*numbs[i];
                    break;
                case '\/-':
                    ans = -ans/numbs[i];
                    break;
            }
        }
        return (Math.round(100*ans)/100).toString()
    }
    handleClick(event){
        document.getElementById('displayer').style.color = (this.props.disp.length == 15) ? 'red' : 'black'
        if (this.props.disp.length == 16){ this.props.changeDisplay('MAX REACHED')}
        else if (this.props.disp == 'MAX REACHED' || this.props.disp == '0'){
            this.props.changeDisplay(parseInt(event.target.innerHTML) ? event.target.innerHTML : (event.target.innerHTML == '-') ? '-': '0'  )
        }
        else{
            switch(event.target.innerHTML){
                case 'AC':
                    this.props.changeDisplay('0')
                    this.props.changeTopDisplay('')
                    break
                case '.':
                    let a = this.props.disp.split(/[x?+?-?/]/g);
                    if (a[a.length-1].split('.').length == 1){
                        this.props.changeDisplay(this.props.disp + event.target.innerHTML)
                    }
                    break;
                case '=':
                    this.props.changeTopDisplay(this.props.disp + '=')
                    this.props.changeDisplay(this.handleArithmetic());
                    break;
                case '\/':
                case '+':
                case 'x':
                    switch(this.props.disp[this.props.disp.length -1]){
                        case '-':
                        case '+':
                        case 'x':
                        case '\/':
                            let aux = [...this.props.disp.split('')]
                            aux.pop()
                            this.props.changeDisplay(aux.join('') + event.target.innerHTML)
                            break;
                        default:
                            this.props.changeDisplay(this.props.disp + event.target.innerHTML)
                            break
                    }
                    break;
                case '-':
                    this.props.changeDisplay((this.props.disp[this.props.disp.length -1] == '-') ? this.props.disp : this.props.disp + event.target.innerHTML)    
                    break;
                default:
                    this.props.changeDisplay(this.props.disp + event.target.innerHTML)
                
        }
        }
        
//         this.props.changeDisplay(event.target.innerHTML)
    }
    handleStyle(){
        switch(this.props.b){
            case 'AC':
                return styles.AC
            case '=':
                return styles.Equals
            case '0':
                return styles.AC
            case '\/':
            case 'x':
            case '-':
            case '+':
                return styles.Operators
            default: 
                return styles.Numbers
        }
    }
    render(){
        return <div style={this.handleStyle()} id='buttons'>
            <button style={styles.butt} onClick={this.handleClick}>{this.props.b}</button>
        </div>
    }
}

const styles = {
    Numbers: {
        flex: 1
    },
    Operators: {
        flex: 1
    },
    AC: {
        flex: 2,
    },
    Equals: {
        flex: 1,
    },
    butt: {
         display: 'block',
         width: '100%',
         height: '100%',
         border: 'solid black 2px',
         borderRadius: 10,
         backgroundColor: 'grey',
         color: 'black',
         fontFamily: 'Courier New',
         fontSize: 30
    }
};

function mapStateToProps(state){
    return {
        disp: state.disp,
        topdisp: state.topdisp
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeDisplay: (inp) => dispatch({type: 'CHANGE_DISPLAY', newChar:  inp}),
        changeTopDisplay: (inp) => dispatch({type: 'CHANGE_TOPDISPLAY', newTop: inp})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Button);
