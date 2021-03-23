import React,{memo} from 'react'

function Cart(props) {

    console.log('cart');
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                        {props.cart.map((itemCart,index) => {
                            return <tr key={index}>
                                <th>{itemCart.id}</th>
                                <th>{itemCart.name}</th>
                                <th>{itemCart.price}</th>
                            </tr>
                        })}
                    </tbody>
            </table>
        </div>
    )
}

export default memo(Cart)