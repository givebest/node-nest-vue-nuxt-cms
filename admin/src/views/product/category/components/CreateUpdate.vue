<template>
  <div class="app-container" v-loading="loading">
    <el-form
      :model="formData"
      :rules="rules"
      ref="validateForm"
      label-width="140px"
    >
      </el-form-item>
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>

      <el-form-item label="路由（SEO）" prop="route">
        <el-input v-model="formData.route"></el-input>
      </el-form-item>

       <el-form-item label="描述（SEO）" prop="introduction">
        <el-input v-model="formData.description"></el-input>
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-switch v-model="formData.status"></el-switch>
        {{ formData.status ? '开启' : '停用' }}
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
import { getDetail, create, update } from '@/api/product-category'
import { config } from '../config'

export default {
  name: 'ProductCreateUpdate',
  filters: {},
  props: {
    type: {
      type: String,
      default: function() {
        return 'create'
      },
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
        route: '',
        description: '',
        status: true,
      },
      rules: {
        name: [
          { required: true, message: '请输入分类', trigger: 'blur' },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur',
          },
        ],
      },

      categoryList: [],
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

    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    // 选择分类
    onChoiceCategory(value) {
      console.log('onChoiceCategory', value)
      this.formData.parent = value
    },

    // 清空分类选择
    onResetCategory() {
      this.formData.parent = []
    },

    // 获取  query 参数
    getQuery() {
      const querys = this.$route.query || {}
      this.querys = querys

      if (this.type === 'update') {
        this.getDetail()
      }
    },

    // 默认一级分类 parent 为 0
    defaultCategoryParent() {
      let parent = this.formData.parent || []
      return parent.length > 0 ? parent : ['0']
    },

    // 判断分类是否是否包含
    hasCategory() {
      let parent = this.formData.parent || []
      let id = this.formData.id
      console.log(parent, id)
      if (parent.indexOf(id) > -1) {
        return true
      }
    },

    // 添加
    postCreate() {
      create(this.formData).then(() => {
        this.loading = false

        this.$message({
          message: '恭喜，操作成功',
          type: 'success',
          duration: 1000,
        })

        setTimeout(() => {
          this.$router.push(`${config.routePath}list`)
        }, 1000)
      })
    },

    // 更新
    putUpdate() {

      update(this.formData).then(() => {
        this.loading = false

        this.$message({
          message: '恭喜，操作成功',
          type: 'success',
          duration: 1000,
        })

        setTimeout(() => {
          this.$router.push(`${config.routePath}list`)
        }, 1000)
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
