var express = require('express');
var router = express.Router();

function checkParameter(v){
    if (typeof(v) == 'object'){
        return v.every(checkParameter)
    }
    else{
        let aux = v.split('.')
        //one dot only && no characters
        return (aux.length <= 2 && aux.every((s) => !s.match(/\D/g))) ? true: false
    
    }
    
}

function setStringToNumber(s){
    s = s.split('.')
    return (s.length == 2) ? parseInt(s[0].concat(s[1]))/(10**s[1].length) : parseInt(s[0])
}

function getValue(req,res){
    if (Object.keys(req.body).every((val) => checkParameter(req.body[val]))){
        let data = {
            x:[],
            y:[]
        }
        let [a,b,c] = req.body.p.map(setStringToNumber)
        req.body.pace = setStringToNumber(req.body.pace)
        req.body.min = setStringToNumber(req.body.min)
        req.body.max = setStringToNumber(req.body.max)
        let x = req.body.min
        while(x<req.body.max){
            data.x.push(x)
            data.y.push(a*x**b+c)
            x+=req.body.pace
        }
        
        res.json(data)
    } 
    else{
    res.json('ERROR')
    }
    
}

router.post('/POL',getValue)



module.exports = router;
