import React from 'react'
import { Redirect,withRouter } from 'react-router'

export default function Profile(props) {
   
    if(localStorage.getItem('userLogin')){
    return (
        <div>
            profile
        </div>
    )} else {

        alert ('please login')
        // props.history.push('./login')
        return <Redirect to = './login'/>
    }
}
