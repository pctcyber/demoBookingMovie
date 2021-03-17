import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class LifeCircle extends Component {


    constructor(props) {
        super(props)
        this.state = {
            number: 1,
            stateNumber: {
                number: 1
            }
        }
    }

    static getDerivedStateFromProps(newProps, currentState) {

        console.log('getDerivedStateFromProps');
        return currentState;
    }


    // chay sau khi state hoac props cua componet thay doi va truoc render

    shouldComponentUpdate(newProps, newState) {

        // xu ly => return false giao dien khong render lai, return true giao dien render lai (default)

        return true;
    }

    render() {

        console.log('render');
        return (
            <div>
                <h1>{this.state.stateNumber.number}</h1>
                <button className="btn btn-success" onClick={() => {
                    // this.setState({
                    //     number: this.state.number + 1
                    // })

                    let newStateNumber = { ...this.state.stateNumber };
                    newStateNumber.number += 1;
                    this.setState({
                        stateNumber: newStateNumber
                    })
                }} >click Me</button>

                {this.state.stateNumber.number < 3 ?
                    <ChildComponent stateNumber={this.state.stateNumber} /> : ''}

            </div>
        )
    }

    // lifecycle dung de goi api
    componentDidMount() {
        console.log('componentDidmount');

    }

    // componentDidupdate chay ke tu lan thay doi props hoac state
    componentDidUpdate(prevProps, prevState) { // chay moi lan setstate hoac props
        // han che setState trong component nay (muon setState phai co dieu kien if)
        console.log('componentDidUpdate');
    }
}


