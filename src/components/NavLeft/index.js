import React from 'react'
import MenuConfig from './../../config/menuConfig'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import './index.css'
// import Item from 'antd/lib/list/Item';
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
export default class NavLeft extends React.Component {
    componentWillMount () {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu= (data)=> {
        return data.map((item)=> {
            if (item.children) {
                // this.renderMenu(item.children)
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>
                    {item.title}
                </NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div className="nav-left-content">
                <div className="logo">
                    <img className="logo-img" src="/assets/logoImg.png" alt="" ></img>
                    <div className="logo-name">AnXue SYS</div>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}