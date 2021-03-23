import React, { useState,useMemo } from 'react'
import Cart from './Cart'
export default function UseMemoHook() {

    let [like, setLike] = useState(1);
    // let cart = [
    //     { id: 1, name: 'iPhone', price: 1000 },
    //     { id: 2, name: 'xiOmi', price: 1000 },
    //     { id: 3, name: 'samSung', price: 1000 }
    // ]

    // const cartMemo = useMemo(() => cart, [like] )

    const arrCart = () => {
        let cart = [
            { id: 1, name: 'iPhone', price: 1000 },
            { id: 2, name: 'xiOmi', price: 1000 },
            { id: 3, name: 'samSung', price: 1000 }
        ]
        return cart;            
    }

    const cartMemo = useMemo(arrCart,[like])
    
    return (
        <div className='m-5'>
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 25 }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>

            <Cart cart = {cartMemo}/>
        </div>
    )
}
