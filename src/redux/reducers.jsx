import {ACTIVEDOTSTYLE } from './actions'

const initialState = {
    activeSection : ''
}
// reducer function 

export function actiuveSectionDetctor(state = initialState , action) {
    if(action.type === ACTIVEDOTSTYLE){
        return {...state , activeSection : action.payload }
    }
    else {
        return {...state, activeSection: '' }
    }
}
