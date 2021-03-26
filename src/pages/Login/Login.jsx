import React, { useState } from 'react'
import { Prompt, Redirect } from 'react-router';

export default function Login(props) {

    console.log(props);
    const [userLogin,setUserLogin] = useState({userName:'',passWord:''})

    console.log({userLogin});
    const handleChange = (event) => {
        
        const {name,value} = event.target;

        setUserLogin({
            ...userLogin,[name]:value
        })

    }

    const handleLogin = (event) => {
        event.preventDefault();
        if(userLogin.userName === 'cyberlearn' && userLogin.passWord === 'cyberlearn'){

            localStorage.setItem('userLogin',JSON.stringify(userLogin))
            props.history.push('/profile');
            // props.history.replace('/home')
        //   {  <Redirect to = './login' />}
        } else{
            alert('fail login')
            return ;
        }

    }
    return (
        <div className='container'>
            <form action="" className='form-group' onSubmit = {handleLogin}>
                <span>UserName</span>
                <input name = "userName" type="text" className='form-control mb-3' onChange = {handleChange}/>
                <span>PassWord</span>
                <input name = 'passWord' type="text" className='form-control' onChange={handleChange}/>
                <button className='btn btn-success mt-3'>Login</button>
                <Prompt when = {true} message = {(location) => {
                    console.log(location);
                    return "Ban co chac muon roi khoi trang nay khong"
                }}/>
            </form>
        </div>
    )
}
