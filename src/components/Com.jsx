import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../actions'

const Com = () => {
    const dispatch = useDispatch()
    const name = useSelector(state => state.name)

    React.useEffect(() => {
        dispatch(setName("hhh"))
    })

    return (
        <h1>{name}</h1>
    )
}

export default Com;