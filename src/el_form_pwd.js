// generate validators form elformvalidators snippets
import { passwordValidators } from '/path/to/elFormValidators'

export default {

  data() {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        callback(new Error('年龄不能为空'))
        return
      }
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字值'))
      } else if (value < 18) {
        callback(new Error('必须年满18岁'))
      } else {
        callback()
      }
    }


    const validateCheckPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.passwordForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      passwordForm: {
        password: '',
        checkPassword: '',
        age: '',
      },
      passwordFormRules: {
        password: passwordValidators,
        checkPassword: [
          {
            required: true,
            message: '请再次输入密码',
            trigger: 'blur',
          },
          {
            validator: validateCheckPassword,
            trigger: 'blur',
          },
        ],
        age: [
          {
            validator: checkAge,
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    async submitForm(formName) {
      const form = this.$refs[formName]
      try {
        await form.validate()
      } catch (ex) {
        console.log('error submit!!')
        // TODO
        return
      }
      console.log('submit!')
      this.submitFormData()
    },

    submitFormData() {
      // TODO
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
