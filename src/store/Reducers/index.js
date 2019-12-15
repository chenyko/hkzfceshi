// 创建一个reducer，reducer作用如下
// 1.初始化状态
import {GET_CITY_NAME} from '../ActionType'
const initialState = {
 cityName:''
}
// 2.状态的加工
export default (state = initialState, { type, value }) => {
  let  newState=JSON.parse(JSON.stringify(state))
    switch (type) {
    case GET_CITY_NAME:
        newState.cityName=value
        return newState
    default:
        return state
    }
}
