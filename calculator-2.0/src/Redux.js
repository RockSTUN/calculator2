const INITIAL_STATE={
    disp: '0',
    topdisp: '',
    pace: 0.5,
    fn: 'NONE',
    fnParameters: [],
    order: 1,
    data: {},
    fP: {},
    zero: 0,
    precision: 0
}

function reducer(state = INITIAL_STATE, action){
    switch (action.type){
        case 'CHANGE_PRECISION':
            return {...state, precision: action.precision}
        case 'GETZERO':
            return {...state, zero: action.zero}
        case 'RECEIVE_FUNCTION':
            return {... state, fP: action.newFunction}
        case 'RECEIVE_DATA':
            return {...state, data: {x: action.x, y: action.y}}
        case 'CHANGE_ORDER':
            return {...state, order: action.newOrder}
        case 'CHANGE_PARAMETERS': 
            return {...state,fn: action.newFn, fnParameters: action.newParams}
        case 'CHANGE_DISPLAY':
            return {...state, disp: action.newChar}
        case 'CHANGE_TOPDISPLAY':
            return {...state, topdisp: action.newTop}
        default:
            return state
    }
}

export default reducer
