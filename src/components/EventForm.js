import React, { useState, useContext } from 'react'

import {
    CREATE_EVENT,
    DELETE_ALL_EVENTS
} from '../actions'
import AppContext from '../contexts/AppContext'

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [count, setCount] = useState('')

    const addEvent = e => {
        e.preventdefault()
        dispatch({
            type: CREATE_EVENT,
            name,
            price,
            count
        })

        setName('')
        setPrice('')
        setCount('')
    }

    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm('全ての在庫情報を本当に削除しても良いですか？')
        if (result) dispatch({ type: DELETE_ALL_EVENTS })
    }

    const unCreatable = name === '' || price === '' || count === ''

    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className='form-group'>
                    <label htmlFor="formItemName">商品名</label>
                    <input className="form-controll" id="formItemName" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="formItemPrice">値段</label>
                    <input type="number" className="form-controll" id="formItemPrice" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="formItemCount">個数</label>
                    <input type="number" className="form-controll" id="formItemCount" value={count} onChange={e => setCount(e.target.value)} />
                </div>

                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>在庫情報を作成する</button>
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全ての在庫情報を削除する</button>
                <button className="btn btn-danger">全ての操作ログを削除する</button>
            </form>
        </>
    )
}

export default EventForm