import React, { Component } from 'react'
import { connect } from 'react-redux';


class Loading extends Component {

    rederLoading = () => {

        if (this.props.isLoading) {
            return <div style={{ position: 'fixed', 
                                 width: '100%',
                                 height: '100%', 
                                 top: 0,
                                 left: 0,
                                 zIndex: 10 }}>

                <div style={{ width: '100%',
                              height: '100%', 
                              display: 'flex', 
                              flexDirection: 'row', 
                              justifyContent: 'center' }}>

                </div>

            </div>
        }

    }

    render() {
        return (
            <div>
                {this.rederLoading()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {

        isLoading: this.props.loading,
    }
}

export default connect(mapStateToProps)(Loading)