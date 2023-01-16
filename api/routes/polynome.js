var express = require('express');
var router = express.Router();

function checkParameter(v){
    if (typeof(v) == 'object'){
        return v.every(checkParameter)
    }
    else{
        let aux = v.split('.')
        //one dot only && no characters
        return (aux.length <= 2 && aux.every((s) => {
            
            let signal = (s[0] == '-') ? s.slice(1) : s
            return (!signal.match(/\D/g)) 
            
        })) ? true: false
    
    }
    
}

function setStringToNumber(s){
//     let signal = (s[0] == '-') ? true: false
    s = s.split('.')
    let number = (s.length == 2) ? parseInt(s[0].concat(s[1]))/(10**s[1].length) : parseInt(s[0])
    return number //signal ? -number : number
}

function Rounders(value){
    return Math.round(value*100)/100
}

function getValue(req,res){
    if (Object.keys(req.body).every((val) => checkParameter(req.body[val]))){
        let data = {
            x:[],
            y:[]
        }
        let parameters = [...req.body.p].map(setStringToNumber)
        req.body.pace = setStringToNumber(req.body.pace)
        req.body.min = setStringToNumber(req.body.min)
        req.body.max = setStringToNumber(req.body.max)
        let x = req.body.min
        let i=0
        
        while(x<req.body.max){
            data.x.push(Rounders(x))
            let soma = 0
            
            for (let j = 0;j< parameters.length;j++){
                soma += (x**(parameters.length - j -1))*parameters[j]
            }
            data.y.push(Rounders(soma))
            x+=req.body.pace
            i+=1;
        }
        
              
        res.json(data)
    } 
    else{
    res.json('ERROR')
    }
    
}

router.post('/POL',getValue)



module.exports = router;
