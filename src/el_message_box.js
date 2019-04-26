const alertOptions = {
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  // success | info | warning | error
  type: '',
}
this.$alert('内容 string | vnode', '标题名称' /*, alertOptions*/)

const confirmOptions = {
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  // success | info | warning | error
  type: '',
}

try {
  await this.$confirm('内容 string | vnode', '标题' /*, confirmOptions*/)
} catch (ex) {
  return
}

const promptOptions = {
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
  inputErrorMessage: '邮箱格式不正确',
}

try {
  this.$prompt('请输入邮箱 string | vnode', '标题', promptOptions)
} catch (ex) {
  return
}
