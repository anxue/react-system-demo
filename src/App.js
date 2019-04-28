import React from 'react';
// import logo from './logo.svg';
// import Button from 'antd/lib/button';
// import { Button } from 'antd'
import './App.css';

export default class App extends React.Component{

    render() {
      return (
        <div className="App">
          {this.props.children}
        </div>
      )
    }
}
