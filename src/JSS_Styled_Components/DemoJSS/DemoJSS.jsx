import React, { Component } from 'react'
import { Button, TomatoButton } from '../Component/Button'

export default class DemoJSS extends Component {
    render() {
        return (
            <div>

                {/* <button className='btn btn-success'> helo</button> */}
                <Button className='button_style'>cyberSoft</Button>

                {/* dùng props để identify style */}
                <Button>Normal</Button>
                <Button primary>Primary</Button>

                {/* Tính kế thừa */}
                <TomatoButton>TomatoButton</TomatoButton>
            </div>
        )
    }
}
