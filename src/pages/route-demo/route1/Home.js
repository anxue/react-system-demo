import React from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import Main from './Main'
import About from './about'
import Topics from './topics'
export default class Home extends React.Component{

    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/topics">topics</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topics}></Route>
                    </Switch>
                    
                </div>
            </HashRouter>
        )
    }
}