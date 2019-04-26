import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component{

    render() {
        return (
            <div className="route2">
                <ul>
                    <li>
                        <Link to="/">Home2</Link>
                    </li>
                    <li>
                        <Link to="/about">about2</Link>
                    </li>
                    <li>
                        <Link to="/topics">topics2</Link>
                    </li>
                    <li>
                        <Link to="/imooc1">imooc1</Link>
                    </li>
                    <li>
                        <Link to="/imooc2">imooc2</Link>
                    </li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        )
    }
}