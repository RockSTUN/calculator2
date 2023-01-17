function NRpoly(params, x0, erro, count = 0){
    let f = 0;
    for (let i = 0;i<params.length;i++){
        f += x0**(i)*(params[params.length -1 - i])
    }
    let f_dot = 0
    for (let i = 1; i<params.length;i++){
        f_dot += (i)*(params[params.length -1 - i])*x0**(i-1)
    }
    return (f/f_dot < erro) ? x0 - f/f_dot : (count <= 50) ? NRpoly(params, x0 - f/f_dot, erro, count+1) : 'MAX ITERATIONS REACHED'
}
function NRexp(params, x0, erro, count = 0){
    const [a,b,c] = params
    const f = a*Math.exp(x0*b) + c
    const f_dot = a*b*Math.exp(x0*b)
    return (f/f_dot < erro) ? x0 - f/f_dot : (count <= 50) ? NRexp(params, x0 - f/f_dot, erro, count+1) : 'MAX ITERATIONS REACHED'
    
}

function logBase(value, base){
    return Math.log(value)/Math.log(base)
}

function NRlog(params, x0,erro,count = 0){
    const [a,b,c,d] = params
    const f = a*logBase(x0,b)**c + d;
    const f_dot = (1/(x0*logBase(b,Math.exp(1))))*c*a*logBase(x0,b)**(c-1)
    return (f/f_dot < erro) ? x0 - f/f_dot : (count <= 50) ? NRlog(params, x0 - f/f_dot, erro, count+1) : 'MAX ITERATIONS REACHED'
}
function NRpow(params, x0,erro,count = 0){
    const [a,b,c] = params
    const f = a*x0**b + c
    const f_dot = a*b*x0**(b-1)
    return (f/f_dot < erro) ? x0 - f/f_dot : (count <= 50) ? NRpow(params, x0 - f/f_dot, erro, count+1) : 'MAX ITERATIONS REACHED'
}

function stringToNumber(s){
    if (/^(-?[0-9]*\.?[0-9]*)$/){
           
        let aux = s.split('.')
                return (aux.length == 2) ?  parseInt(aux[0].concat(aux[1])/(10**aux[1].length)) : parseInt(s);
        }
        else{
            return 'WRONG FORMAT'
        }
}


function newtonRaphson(model, fp, precision = 0.01){
    console.log('ANTES: ',fp)
    fp.min = stringToNumber(fp.min)
    fp.max = stringToNumber(fp.max)
    fp.p = fp.p.map(stringToNumber)
    console.log('DEPOIS: ',fp)
    if(Object.keys(fp).every((k) => fp[k] != 'WRONG FORMAT')){
        const x0 = (fp.min +fp.max)/2
        switch(model){
            case 'POL':
                return NRpoly(fp.p,x0,precision)
            case 'EXP':
                return NRexp(fp.p,x0,precision)
            case 'POW':
                return NRpow(fp.p,x0,precision)
            case 'LOG':
                return NRlog(fp.p,x0,precision)
            default:
                return 'Set the function type`'
        }    
    }
    else{
        return 'WRONG FORMAT'
    }
    
    
}

export default newtonRaphson;
