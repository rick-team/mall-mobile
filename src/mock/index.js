import Mock from 'mockjs'

const Random = Mock.Random

const pro = ['HUA WEI MATE 20 RPO222', 'IPhoneX', '富婆', '豪车']

function mockData(data) {
  return {
    code: 1,
    data: data
  }
}


function ActivityDto() {
  const item = pro[Random.natural(0, 4)]
  return {
    actId: Random.natural(1000, 2000), //活动ID
    actNum: Random.natural(1, 100), // 活动期数
    actStatus: Random.natural(1, 3), // 活动状态 1：进行中2：开奖中3：已开奖
    joinCount: Random.natural(0, 100), //总参与次数
    endCount: Random.natural(200, 1000), //活动结束需要次数
    endTime: Random.now('hour'),
    prizeDto: item
  }
}

function MyJoinRecord() {
  return {
    joinCode: Random.string('upper', 8),
    joinTime: Random.now('second')
  }
}

function joinRecord() {
  return {
    userInfo: UserInfo(),
    joinCount: Random.natural(0, 10),
    joinTime: Random.now('second')
  }
}

function UserInfo() {
  return {
    nickName: Random.cname(),
    imgUrl: Random.image('160x160'),
    sex: Random.natural(1, 2)
  }
}

function userBalance(){
  return {
    ticket: Random.natural(5, 100),
    diamond: Random.natural(10, 100)
  }
}

// 首页轮播图
Mock.mock('/treasure/common/getCarousel', 'post', mockData([{
    img: require('@/assets/banner_1.jpg'),
    activityId: Random.natural(1)
  },
  {
    img: require('@/assets/banner_2.jpg'),
    activityId: Random.natural(1)
  },
  {
    img: require('@/assets/banner_1.jpg'),
    activityId: Random.natural(1)
  }
]))

//获取首页中奖记录
Mock.mock('/treasure/common/getAwardRecord', 'post', function () {
  const data = []
  const len = Random.natural(10, 25)

  for (let i = 0; i < len; i++) {
    const item = pro[Random.natural(0, 4)]
    data.push(`恭喜：用户 ${Random.cname()} 获得 ${item} 价值 ${ Random.natural(1000, 10000) }`)
  }

  return mockData(data)
})

// 获取活动列表
Mock.mock('/treasure/common/getActivityList', 'post', function () {
  const data = []
  const len = Random.natural(10, 25)

  for (let i = 0; i < len; i++) {
    data.push(ActivityDto())
  }

  return mockData(data)
})

// 获取活动详情页面
Mock.mock('/treasure/common/getActivityDetail', 'post', mockData({
  activity: ActivityDto(),
  joinPrice: Random.natural(1, 100),
  maxJoinCount: Random.natural(3, 10),
  awardRecord: '',
  myJoinRecord: MyJoinRecord(),
  joinRecord: joinRecord()
}))

// 参与活动
Mock.mock('/treasure/user/joinActivity', 'post', mockData({}))


function Record() {
  const data = []
  const len = Random.natural(10, 25)
  const exchangeCode = ['', Random.string('upper', 8)]
  for (let i = 0; i < len; i++) {
    data.push({
      ActivityDto: ActivityDto(),
      exchangeCode: exchangeCode[ Random.natural(0, 1) ],
      joinCount: Random.natural(5, 10),
      joinTime: Random.now('second')
    })
  }

  return mockData(data)
}

// 获取全部参与记录
Mock.mock('/treasure/user/getMyJoinRecord', 'post', Record())

// 获取全部获奖记录
Mock.mock('/treasure/user/getMyAwardRecord', 'post', Record())


// 兑换礼品
Mock.mock('/treasure/user/exchangeGiftCode', 'post', mockData(userBalance()))

// 获取用户余额
Mock.mock('/treasure/user/getUserInfo', 'post', mockData({
  userInfo: UserInfo(),
  diamond: userBalance()
}))





