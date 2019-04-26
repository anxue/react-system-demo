import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './Main'
import Info from './info'
import About from './../route1/about'
import Topics from './../route1/topics'
import Home from './Home'
import NoMatch from './NoMatch'
export default class IRouter extends React.Component{

    render() {
        return (
            <Router>
                 <Home>
                    <Switch>
                        <Route path="/" render={()=>
                            <Main>
                                <Route  path="/main/:mainId" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topics}></Route>
                        <Route  component={NoMatch}></Route>
                    </Switch>
                 </Home>
            </Router>
        )
    }
}