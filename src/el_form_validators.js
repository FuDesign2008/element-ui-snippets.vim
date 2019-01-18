
const validateTrim = (rule, value, callback) => {
  if (value.trim() !== value) {
    callback(new Error('内容前后不能有中英文空格'))
  } else {
    callback()
  }
}
/**
 * @public
 * @param {String} [trigger]
 * @param {Object} [options]
 */
function createCommonLengthValidators(type = '内容', trigger, options) {
  const theOptions = Object.assign(
    {
      checkTrim: true,
      isRequired: true,
      min: 2,
      max: 32,
    },
    options,
  )
  const {
    isRequired, min, max, checkTrim,
  } = theOptions
  const validators = [
    {
      required: isRequired,
      message: `${type}不能为空`,
      trigger: trigger || [],
    },
    {
      min,
      max,
      message: `${type}长度在 ${min} 到 ${max} 个字符`,
      trigger: trigger || [],
    },
  ]

  if (checkTrim) {
    validators.unshift({
      validator: validateTrim,
      trigger: trigger || [],
    })
  }

  return validators
}

function validatePassword(rule, value, callback) {
  const full = /^[a-z0-9_~!@#-]+$/i
  if (!full.test(value)) {
    callback(new Error('密码只能包含大小写英文字符，数字及 _~~@#- 特殊字符'))
    return
  }
  if (
    /[a-z]/.test(value) === false
    || /[A-Z]/.test(value) === false
    || /[0-9]/.test(value) === false
  ) {
    callback(new Error('密码复杂度太低, 必须包含大写字母，小写字母和数字'))
    return
  }
  callback()
}

const passwordValidators = [
  ...createCommonLengthValidators('密码', 'change', {
    min: 8,
  }),
  {
    validator: validatePassword,
    trigger: 'change',
  },
]

export { createCommonLengthValidators, passwordValidators }
