import React from 'react'
// import {Route, Redirect} from 'react-router-dom'
export default class Login extends React.Component{
    handleOnClick=()=>{
        // this.props.history.location.pathname = '/admin/home'
        this.props.history.push({ pathname : '/admin/home' })
        // this.setState({redirect: true})
        // return <Route   to="/admin/home" />
    }

    render() {
        return (
            <div>
                this is Login page.
                <button onClick={this.handleOnClick}>去主页</button>
            </div>
        )
    }
}