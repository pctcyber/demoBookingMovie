import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        firstName:'',
        lastName:'',
        passWord:''
    }

    handleChange = (name,value) => {


        this.setState({
            [name]: value
        },console.log(this.state))
    }

    render() {
        return (
            <div className = 'container'>
                <form className = 'form-group mt-5'>

                        <input onChange = {(event) => {
                            let {name,value} = event.target
                            this.handleChange(name,value)
                        }}  type="text" name = 'firstName' placeholder = 'firtName' className = 'form-control'/>

                        <input type="text" name = 'lastName' placeholder = 'lastName' className = 'form-control my-4'/>

                        <input type="password" name = 'passWord' placeholder = 'passWord' className = 'form-control'/>

                        <button className = 'btn btn-success mt-3'>Submit</button>
                </form>
            </div>
        )
    }
}
