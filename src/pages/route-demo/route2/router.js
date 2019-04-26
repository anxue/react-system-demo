import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
export default class IRouter extends React.Component{

    render() {
        return (
            <Router>
                <Route exact={true} path="/" component={Main}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/topics" component={Topics}></Route>
            </Router>
        )
    }
}