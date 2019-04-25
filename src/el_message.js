this.$message({
  message: '这是一条成功消息',
  // success | warning | info | error
  type: 'success',
})

const h = this.$createElement
const vnodeMessage = h('p', null, [
  h('span', null, '内容可以是 '),
  h(
    'i',
    {
      style: 'color: teal',
    },
    'VNode',
  ),
])

this.$message({
  message: vnodeMessage,
  // success | warning | info | error
  type: 'success',
})

this.$message({
  dangerouslyUseHTMLString: true,
  message: '<strong>这是 <i>HTML</i> 片段</strong>',
  // success | warning | info | error
  type: 'success',
})

this.$message({
  message: vnodeMessage,
  // success | warning | info | error
  type: 'success',
  // 文字是否居中
  // center: false,
  // 是否显示关闭按钮
  // showClose: false,
  // 显示时间, 毫秒。设为 0 则不会自动关闭
  // duration: 3000,
  // 自定义类名
  // customClass: 'custom-message-class',
  // 定义图标的类名，会覆盖 type
  // iconClass: 'message-icon-class',
  // 关闭时的回调函数, 参数为被关闭的 message 实例
  // onClose: this.onMessageClose,
})
