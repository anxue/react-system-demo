import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Main from './Main'
import About from './../route1/about'
import Topics from './../route1/topics'
import Home from './Home'
export default class IRouter extends React.Component{

    render() {
        return (
            <Router>
                 <Home>
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topics}></Route>
                 </Home>
            </Router>
        )
    }
}