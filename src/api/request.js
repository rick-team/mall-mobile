import server from './config'

// 首页轮播图
export const getCarousel = (store, parms) => server.post('/treasure/common/getCarousel', parms)

//获取首页中奖记录
export const getAwardRecord = (store, parms) => server.post('/treasure/common/getAwardRecord', parms)

// 获取活动列表
export const getActivityList = (store, parms) => server.post('/treasure/common/getActivityList', parms)

// 获取活动详情页面
export const getActivityDetail = (store, parms) => server.post('/treasure/common/getActivityDetail', parms)

// 参与活动
export const joinActivity = (store, parms) => server.post('/treasure/user/joinActivity', parms)

// 获取全部参与记录
export const getMyJoinRecord = (store, parms) => server.post('/treasure/user/getMyJoinRecord', parms)

// 获取全部获奖记录
export const getMyAwardRecord = (store, parms) => server.post('/treasure/user/getMyAwardRecord', parms)

// 兑换礼品
export const exchangeGiftCode = (store, parms) => server.post('/treasure/user/exchangeGiftCode', parms)

// 获取用户余额
export const getUserInfo = (store, parms) => server.post('/treasure/user/getUserInfo', parms)
