import React from 'react';
import { Card, Tabs , message, Icon } from 'antd';
import './ui.css'
const TabPane = Tabs.TabPane;
export default class Tab extends React.Component{
    newTabIndex = 0;
    callback=(key)=>{
        message.info('选择选项卡:'+key)
    }
    componentWillMount() {
        const panes = [
            {
                title: 'Tab 1',
                content: '内容1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: '内容2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: '内容3',
                key: '3'
            }
        ]
        this.setState({
            activeKey: panes[1].key,
            panes: panes
        })
    }
    onChange= (activeKey)=> {
        this.setState({
            activeKey
        })
    }
    onEdit= (targetKey, action) => {
        console.log(targetKey, action)
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: activeKey, key: activeKey });
        this.setState({ panes, activeKey });
    }
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
    }
    
    render() {
        return (
            <div>
                <Card title="选项卡切换组件" >
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">内容1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>内容2</TabPane>
                        <TabPane tab="Tab 3" key="3">内容3</TabPane>
                    </Tabs>
                </Card>
                <Card title="有图标的选项卡切换组件" >
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane  tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                            内容1
                        </TabPane>
                        <TabPane  tab={<span><Icon type="android" />Tab 2</span>} key="2">
                            内容2
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="有图标的选项卡切换组件" >
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        // defaultActiveKey="1"
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map(item => {
                                return  <TabPane 
                                tab={item.title}
                                 key={item.key}
                                >{item.content}</TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}