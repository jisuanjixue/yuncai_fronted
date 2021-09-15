module.exports = {
  purge: ["./src/**/*.tsx"],
  corePlugins: {
    // 涉及到子代选择器（>），wx 小程序不支持
    space: false,
    divideStyle: false,
    divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    // 涉及到通配符（*），wx 小程序不支持
    ringWidth: false,
    ringColor: false,
    ringOpacity: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    // web 浏览器相关功能，wx 小程序不支持
    appearance: false,
    cursor: false,
    outline: false,
    placeholderColor: false,
    pointerEvents: false,
    stroke: false,
    tableLayout: false,
    userSelect: false
  },
  theme: {
    extend: {
      zIndex: {
        "-1": "-1"
      }
    },
    spacing: {
      0: "0",
      1: "2rpx",
      2: "4rpx",
      3: "6rpx",
      4: "8rpx",
      5: "10rpx",
      6: "12rpx",
      7: "14rpx",
      8: "16rpx",
      9: "18rpx",
      10: "20rpx",
      11: "22rpx",
      12: "24rpx",
      14: "28rpx",
      16: "32rpx",
      17: "34rpx",
      18: "36rpx",
      20: "40rpx",
      24: "48rpx",
      28: "56rpx",
      30: "60px",
      32: "64rpx",
      36: "72rpx",
      40: "80rpx",
      48: "96rpx",
      52: "104rpx",
      56: "112rpx",
      60: "120rpx",
      64: "128rpx",
      72: "144rpx",
      76: "152rpx",
      80: "160rpx",
      84: "168rpx",
      88: "196rpx",
      92: "184rpx",
      96: "192rpx",
      100: "200rpx",
      120: "240rpx",
      130: "360rpx",
      140: "280rpx",
      160: "320rpx",
      180: "360rpx",
      200: "400rpx",
      "1_2": "50%",
      "1_3": "33.333333%",
      "2_3": "66.666667%",
      "1_4": "25%",
      "3_4": "75%",
      "1_5": "20%",
      "2_5": "40%",
      "3_5": "60%",
      "4_5": "80%",
      "1_6": "16.666667%",
      "5_6": "83.333333%",
      "1_12": "8.333333%",
      "5_12": "41.666667%",
      "7_12": "58.333333%",
      "11_12": "91.666667%",
      full: "100%",
      auto: "auto"
    },
    fontSize: theme => theme("spacing"),
    borderWidth: theme => theme("spacing"),
    lineHeight: theme => theme("spacing"),
    translate: theme => theme("spacing"),
    inset: theme => theme("spacing"),
    width: theme => ({
      ...theme("spacing"),
      screen: "100vw"
    }),
    maxWidth: theme => theme("height"),
    height: theme => ({
      ...theme("width"),
      screen: "100vh"
    }),
    maxHeight: theme => theme("width")
  }
};
