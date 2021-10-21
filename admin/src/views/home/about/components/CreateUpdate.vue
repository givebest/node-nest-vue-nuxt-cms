<template>
  <div class="app-container" v-loading="loading">
    <el-form
      :model="formData"
      :rules="rules"
      ref="validateForm"
      label-width="140px"
    >
      <el-form-item label="标题" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>

      <el-form-item label="图片" prop="pic">
        <el-upload
          action="/api/upload"
          list-type="picture-card"
          :auto-upload="true"
          :file-list="uploadFile.list"
          name="upload"
          drag
          :limit="uploadFile.limit"
          :on-success="onUploadChange"
          :on-exceed="onUploadExceed"
        >
          <i slot="default" class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="简介" prop="intro">
        <el-input v-model="formData.intro"></el-input>
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-switch v-model="formData.status"></el-switch>
        {{ formData.status ? '开启' : '停用' }}
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          id="editor"
          @click="submitForm('validateForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('validateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getDetail, create, update } from '@/api/home-about'
import { baseHost } from '@/utils'

const routePath = '/about/'

export default {
  name: 'HomeAboutCreateUpdate',
  components: {},
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
        pic: '',
        intro: '',
        status: true,
      },
      rules: {
        name: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur',
          },
        ],
        pic: [
          {
            required: true,
            length: 1,
            message: '请上传图片',
            trigger: 'change',
          },
        ],
      },

      // 文件上传
      uploadFile: {
        list: [],
        limit: 1,
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
        /* if (true) {
          console.log('formData', this.formData)
          return
        } */
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

    // 获取  query 参数
    getQuery() {
      const querys = this.$route.query || {}
      this.querys = querys

      if (this.type === 'update') {
        if (!querys.id) {
          this.$router.push('list')
          return
        }
        this.getDetail()
      }
    },

    // 文件上传添加
    onUploadChange(res) {
      this.formData.pic = res.path
    },

    // 超出文件
    onUploadExceed() {
      this.$message({
        message: '抱歉，只能上传一张图片',
        type: 'error',
      })
    },

    // 添加
    postCreate() {
      create(this.formData).then(res => {
        this.loading = false

        this.$message({
          message: '恭喜，操作成功',
          type: 'success',
          duration: 1000,
        })

        setTimeout(() => {
          this.$router.push(`/home${routePath}list`)
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
          this.$router.push(`/home${routePath}list`)
        }, 1000)
      })
    },

    // 详情
    getDetail() {
      this.loading = true

      getDetail(this.querys.id).then(res => {
        this.loading = false

        const { pic } = res
        this.uploadFile.list.push({
          name: pic,
          url: baseHost + pic.replace('public/', '/'),
        })

        this.formData = res
      })
    },
  },
}
</script>
