import React from 'react'
export default class Info extends React.Component{

    render() {
        return (
            <div>
                <div>
                    动态路由的值是：
                    {/* <Link to="/main/a">嵌套路由</Link>
                    <hr /> */}
                    {this.props.match.params.mainId}
                </div>
            </div>
        )
    }
}