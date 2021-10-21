<template>
  <div v-loading="loading" class="app-container">
    <el-form
      ref="validateForm"
      :model="formData"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input
          v-model="formData.oldPassword"
          type="password"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item label="新密码" prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item label="重复密码" prop="rePassword">
        <el-input
          v-model="formData.rePassword"
          type="password"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('validateForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('validateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { updatePassword } from '@/api/users'

export default {
  name: 'ChangPassword',
  components: {},
  filters: {},
  data() {
    var validateRePass = (rule, value, callback) => {
      if (value !== this.formData.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      loading: false,

      formData: {
        id: '',
        oldPassword: '',
        password: '',
        rePassword: '',
      },

      rules: {
        oldPassword: [
          { required: true, message: '请输入旧密码', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: '长度在 6 到 20 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: '长度在 6 到 20 个字符',
            trigger: 'blur',
          },
        ],
        rePassword: [
          { required: true, message: '请再次输入新密码', trigger: 'blur' },
          {
            validator: validateRePass,
            message: '两次输入密码不一致',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  watch: {},
  created() {
    this.getQuery()
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return false
        }

        this.loading = true

        this.putUpdatePassword()
      })
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    // 获取  query 参数
    getQuery() {
      const querys = this.$route.query || {}
      this.formData.id = querys.id
    },

    // 更新
    putUpdatePassword() {
      updatePassword(this.formData)
        .then(() => {
          this.loading = false

          this.$message({
            message: '恭喜，操作成功',
            type: 'success',
            duration: 1000,
          })

          setTimeout(() => {
            this.$router.push('/user/list')
          }, 1000)
        })
        .catch(() => {
          this.loading = false
        })
    },
  },
}
</script>
