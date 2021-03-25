import React, { useState } from 'react'

export default function Login(props) {

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

            props.history.push('/home');
            // props.history.replace('/home')
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
            </form>
        </div>
    )
}
