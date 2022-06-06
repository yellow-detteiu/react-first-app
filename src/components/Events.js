import React, { useContext } from 'react'

import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
    const { state } = useContext(AppContext)

    return (
        <>
            <h4>在庫一覧</h4>
            <table className="table table-hover">
                <thred>
                    <tr>
                        <th>ID</th>
                        <th>商品名</th>
                        <th>値段</th>
                        <th>個数</th>
                    </tr>
                </thred>
                <tbody>
                    { state.map((event, index) => (<Event key={index} event={event} />)) }
                </tbody>
            </table>
        </>
    )
}

export default Events