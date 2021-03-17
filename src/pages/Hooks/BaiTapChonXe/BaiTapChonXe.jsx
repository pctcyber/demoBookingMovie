import React,{useState} from 'react'

export default function BaiTapChonXe(props) {

    let[stateCar,setStateCar] = useState({color: 'Black'})
    const changeColor = (color) => {
        
        setStateCar({color:`${color}`})
    }

    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-6">
                <img src={`./img/img${stateCar.color}Car.jpg`} style = {{width: '350px', height:'250px'}} alt="hinhAnh"/>
                </div>
                <div className="col-6">
                    
                    <div className='mt-3'>
                        <button className='btn btn-success' onClick = {() => {
                            changeColor('Black')
                        }} >Black car</button>
                        <button className='btn btn-danger mx-2' onClick = {() => {
                            changeColor('Red')
                        }}>Red car</button>
                        <button className='btn btn-dark' onClick = {() => {
                            changeColor('Silver')
                        }}>Silver car</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
