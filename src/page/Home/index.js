import React, { Component, Fragment } from 'react'
import REACT_APP_API_URL from '../../utils/urls'
import axios from "../../utils/request"
import { Carousel } from 'antd-mobile'
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'
import SearchInput from '../../components/SearchInput'
import './index.scss'
import store from '../../store';


export default class Index extends Component {
  state = {
    swipe_list: [],//轮播图数组
    imgHeight: 176,
    navs:[{id:1,tite:'整租',imgSrc:Nav1},
    {id:2,tite:'合租',imgSrc:Nav2},
    {id:3,tite:'地图找房',imgSrc:Nav3},
    {id:4,tite:'去出租',imgSrc:Nav4}
  ],
  // 租房小组数据
  homeGroups: [],

  // 咨询列表
  news:[]
  }
  Unsubscribe=null;
  componentDidMount() {
    // 获取轮播图数据
    axios.get('/home/swiper').then( (res)=> {
      // console.log(res);
      this.setState({
        swipe_list: res.body
    })
    });
    // 获取租房小组数据
    axios.get('/home/groups').then(res=>{
      // console.log(res);
      
      this.setState({
        homeGroups:res.body
      })
    });
    // 获取资讯信息
    axios.get('/home/news').then(res=>{
      // console.log(res);
      this.setState({
        news:res.body
      })
    });
    this.Unsubscribe=store.subscribe(this.getCityName)
  }
  getCityName =(params) => {
    console.log(store.getState().cityName);
    
 }
  componentWillUnmount(){
    this.Unsubscribe()
  }
  render() {
    return (
      <Fragment>
        <div className='hk-home'>
          {/* 搜索框开始 */}
          <div className='hk_search_input'>
             <SearchInput />
          </div>
          {/* 搜索框结束 */}

          {/* 轮播图开始 */}
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
        {/* 轮播图结束 */}
        {/* 首页导航开始 */}
        <div className='hk_home_nav'>
           {this.state.navs.map(v=>
             <div className='nav_item'> 
             <img alt='' src={v.imgSrc}></img>
             <p>{v.tite}</p>
             </div>
           )}

        </div>
        {/* 首页导航结束 */}
        {/* 租房小组开始 */}
        <div className='hk_home_group'>
         <div className='hk_home_group_title'>
          <span>租房小组</span>
          <span>更多</span>
         </div>
         <div className='hk_home_group_content'>
           {
             this.state.homeGroups.map(v=><div className='group_item' key={v.id}>
               <div className='group_item_desc'>
              <div className='title'>{v.title}</div>
              <div className='info'>{v.desc}</div>
               </div>
               <div className='group_item_img'>
               <img alt='' src={REACT_APP_API_URL+v.imgSrc}></img>
               </div>
             </div>)
           }
         </div>
        </div>
        {/* 租房小组结束 */}
        {/* 咨询列表开始 */}
        <div className='hk_home_news'>
         <div className='news_title'>
           <span>最新资讯</span>
         </div>
      {this.state.news.map(v=><div className='news_item' key={v.id}>
        <div className='news_item_img'>
         <img alt='' src={REACT_APP_API_URL+v.imgSrc}></img>
        </div>
        <div className='news_item_content'>
        <div className='news_item_content_title'>
        <span>{v.title}</span>
        </div>
        <div className='news_item_content_bottom'>
        <span>{v.from}</span>
        <span>{v.date}</span>
        </div>
        </div>
      </div>)}
        </div>
        {/* 咨询列表结束 */}
        </div>
      </Fragment>
    )
  }
}
