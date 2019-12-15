import React, { Component, Fragment } from 'react'
import store from '../../store'
import './index.scss'
export default class index extends Component {
  state = {
    cityName: ''
  }
  Unsubscribe = null;
  componentDidMount() {
    store.subscribe(this.getCityName)
    if (store.getState().cityName != '') {
      this.setState({
        cityName: store.getState().cityName
      })
    }
  }
  getCityName = (params) => {
    this.setState({
      cityName: store.getState().cityName
    })
  }
  render() {
    return (
      <Fragment>
        <div className='search_input'>
          <div className='search_city'>
            <div className="location">
              <span>{this.state.cityName}</span>
              <i className="iconfont icon-arrow"></i>
            </div>
            <div className="search_inp">
              <i className="iconfont icon-seach"></i>
              <span>请输入小区或地址</span>
            </div>
          </div>
          <div className='search_map'>
            <i className="iconfont icon-map"></i>
          </div>
        </div>
      </Fragment>
    )
  }
}
