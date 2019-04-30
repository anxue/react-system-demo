import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Home from './pages/home'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import NoMatch from './pages/nomatch/index'
import Loading from './pages/ui/loading'
import Notification from './pages/ui/notification'
import Message from './pages/ui/message'
import Tab from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
export default class Router extends React.Component{

    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}></Route>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loading" component={Loading}></Route>
                                <Route path="/admin/ui/notification" component={Notification}></Route>
                                <Route path="/admin/ui/message" component={Message}></Route>
                                <Route path="/admin/ui/tabs" component={Tab}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }/>
                </App>
            </HashRouter>
        )
    }
}