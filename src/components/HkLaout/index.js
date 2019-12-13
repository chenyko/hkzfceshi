import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import { withRouter } from "react-router-dom"

class Index extends Component {
  state = {
    selectedTab: 'blueTab'
  }
  render() {
    return (
      <div>
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor='rgb(27,167,132)'
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="首页"
              key="Home"
              icon={<i className='iconfont icon-ind'></i>
              }
              selectedIcon={<i className='iconfont icon-ind' color='rgb(27,167,132)'></i>
              }
              selected={this.props.match.url === '/'}
              onPress={() => {
                this.props.history.push("/");
              }}
            >
              {this.props.children}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <i className='iconfont icon-seach' ></i>
              }
              selectedIcon={
                <i className='iconfont icon-seach' color='rgb(27,167,132)'></i>
              }
              title="找房"
              key="List"

              selected={this.props.match.url === '/list'}
              onPress={() => {
                this.props.history.push('/list')
              }}
            >
              {this.props.children}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <i className='iconfont icon-infom'></i>
              }
              selectedIcon={
                <i className='iconfont icon-infom' color='rgb(27,167,132)'></i>
              }
              title="咨询"
              key="News"

              selected={this.props.match.url === '/news'}
              onPress={() => {
                this.props.history.push('/news')
              }}
            >
              {this.props.children}
            </TabBar.Item>
            <TabBar.Item
              icon={<i className='iconfont icon-my'></i>}
              selectedIcon={<i className='iconfont icon-my' color='rgb(27,167,132)'></i>}
              title="我的"
              key="Profile"
              selected={this.props.match.url === '/profile'}
              onPress={() => {
                this.props.history.push('/profile')
              }}
            >
                {this.props.children}
            </TabBar.Item>
          
          </TabBar>
        </div>
      </div>
    )
  }
}
export default withRouter(Index)