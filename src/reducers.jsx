import * as types from './types'


const initState = {
    name: '',
}

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case types.SET_NAME:
            let newName = payload
            return {
                ...state,
                name: newName
            }
        default:
            return state
    }
}

export default reducer