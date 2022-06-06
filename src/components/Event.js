import React, { useContext } from 'react'

import { DELETE_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext)
    const id = event.id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`在庫情報(id=${id})を本当に削除しても良いですか？`)
        if (result) dispatch({ type: DELETE_EVENT, id })
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{event.name}</td>
            <td>{event.price}</td>
            <td>{event.count}</td>
            <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}

export default Event