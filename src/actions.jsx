import * as types from './types'

export function setName(name) {
    return {
        type: types.SET_NAME,
        payload: name
    }
}