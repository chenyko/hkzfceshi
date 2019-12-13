import React, { Component, Fragment } from 'react'
import REACT_APP_API_URL from '../../utils/urls'
import axios from "../../utils/request"
import { Carousel } from 'antd-mobile'


export default class Index extends Component {
  state = {
    swipe_list: [],//轮播图数组
    imgHeight: 176
  }
  componentDidMount() {
    axios.get('/home/swiper').then( (res)=> {
      // console.log(res);
      this.setState({
        swipe_list: res.body
    })

    })
  }
  
  render() {
    return (
      <Fragment>
        <div className='hk-img'>
          <div className="hk_swipe_list">
        <Carousel
           autoplay={true}
          infinite
        >
          {this.state.swipe_list.map(v => (
              <img
                src={REACT_APP_API_URL+v.imgSrc}
                alt=""
                
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
           
          ))}
        </Carousel>
        </div>
        </div>
      </Fragment>
    )
  }
}
