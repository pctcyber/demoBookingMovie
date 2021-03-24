import React,{useState,useRef} from 'react'

export default function UseRef() {

/**
 *  UseRef có 2 chuc nang:
 *  1 ==> DOM để lấy các thuộc tính : value, name, className , etc... của thẻ input
 *  2 ==> giữ nguyên giá trị sau khi hàm render lại thông qua thuộc tính current
 */

    let inputUserName = useRef(null);
    let inputPassWord = useRef(null);

    let userName = useRef('');
    let[userLogin,setUserLogin] = useState({userName:''}) 

    const handleLogin = () => {
        // console.log('inputUsername', inputUserName.current);
        // console.log('inputPassword', inputPassWord.current);
        console.log(userName.current);
        console.log(userLogin.userName);
        userName.current = 'abc'
        setUserLogin({
            userName: userName.current
        })
    }

 
    return (
        <div className='container'>
            <h1>Login</h1>
            <form action="" className='form-group'>
                <span>UseName</span>
                <input ref = {inputUserName} name = 'inputUserName' type="text" className='form-control'/>
                <span>PassWord</span>
                <input ref = {inputPassWord} name = 'inputPassWord' type="text" className='form-control'/>
            </form>
                <button className='btn btn-success mt-5' onClick = {() => {
                    handleLogin()
                }} >Login</button>
        </div>
    )
}
