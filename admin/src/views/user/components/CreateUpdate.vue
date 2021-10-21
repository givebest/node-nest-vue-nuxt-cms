<template>
  <div class="app-container" v-loading="loading">
    <el-form
      :model="formData"
      :rules="rules"
      ref="validateForm"
      label-width="100px"
    >
      <el-form-item label="用户名" prop="name">
        <el-input
          v-model="formData.name"
          :disabled="type === 'update'"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password" v-if="type !== 'update'">
        <el-input v-model="formData.password" type="password"></el-input>
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-switch v-model="formData.status"></el-switch>
        {{ formData.status ? '开启' : '停用' }}
      </el-form-item>

      <el-form-item label="简介" prop="intro">
        <el-input type="textarea" v-model="formData.intro"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('validateForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { config } from '../config'
import { getDetail, create, update } from '@/api/users'

const { routePath } = config

export default {
  name: 'CreateUpdate',
  filters: {},
  props: {
    type: {
      type: String,
    },
  },
  data() {
    return {
      loading: false,

      // query 参数
      querys: {
        id: '',
      },

      formData: {
        id: '',
        name: '',
        password: '',
        roles: [],
        status: true,
        avatar: '',
        intro: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          {
            min: 3,
            max: 20,
            message: '长度在 3 到 20 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
          {
            min: 8,
            max: 20,
            message: '长度在 8 到 20 个字符',
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

        if (this.type === 'update') {
          this.putUpdate()
        } else {
          this.postCreate()
        }
      })
    },

    onChange(e) {
      console.log(e)
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    // 获取  query 参数
    getQuery() {
      const querys = this.$route.query || {}
      this.querys = querys

      if (this.type === 'update') {
        this.getDetail()
      }
    },

    // 添加
    postCreate() {
      create(this.formData)
        .then(() => {
          this.loading = false

          this.$message({
            message: '恭喜，操作成功',
            type: 'success',
            duration: 1000,
          })

          setTimeout(() => {
            this.$router.push(`${routePath}list`)
          }, 1000)
        })
        .catch(() => {
          this.loading = false
        })
    },

    // 更新
    putUpdate() {
      update(this.formData)
        .then(() => {
          this.loading = false

          this.$message({
            message: '恭喜，操作成功',
            type: 'success',
            duration: 1000,
          })

          setTimeout(() => {
            this.$router.push(`${routePath}list`)
          }, 1000)
        })
        .catch(() => {
          this.loading = false
        })
    },

    // 详情
    getDetail() {
      this.loading = true

      getDetail(this.querys.id).then(res => {
        this.loading = false

        this.formData = res
      })
    },
  },
}
</script>
