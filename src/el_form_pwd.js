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

    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }

    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules2: {
        pass: [
          {
            validator: validatePass,
            trigger: 'blur',
          },
        ],
        checkPass: [
          {
            validator: validatePass2,
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