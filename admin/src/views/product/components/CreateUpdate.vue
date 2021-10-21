<template>
  <div class="app-container" v-loading="loading">
    <el-form
      :model="formData"
      :rules="rules"
      ref="validateForm"
      label-width="140px"
    >
      <el-form-item label="名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>

      <el-form-item label="路由（SEO）" prop="route">
        <el-input v-model="formData.route"></el-input>
      </el-form-item>

      <el-form-item label="分类" prop="category">
        <el-select v-model="formData.category" placeholder="请选择">
          <el-option
            v-for="item in categoryList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="产品图片" prop="pic">
        <el-upload
          action="/api/upload"
          list-type="picture-card"
          name="upload"
          :auto-upload="true"
          :file-list="uploadFile.list"
          :limit="uploadFile.limit"
          :on-success="onUploadChange"
          :on-remove="onRemoveChange"
          :on-exceed="onUploadExceed"
          drag
          multiple
          :headers="uploadHeaders"
        >
          <i slot="default" class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="首页推荐" prop="status">
        <el-switch v-model="formData.recommend"></el-switch>
        {{ formData.recommend ? '开启' : '停用' }}
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-switch v-model="formData.status"></el-switch>
        {{ formData.status ? '开启' : '停用' }}
      </el-form-item>

      <el-form-item label="简介" prop="intro">
        <el-input v-model="formData.intro"></el-input>
      </el-form-item>

      <el-form-item label="详情" prop="content">
        <ckeditor
          :editor="editor"
          v-model="formData.content"
          :config="editorConfig"
        >
        </ckeditor>
      </el-form-item>
    </el-form>
    <div class="fixed--footer">
      <el-button type="primary" id="editor" @click="submitForm('validateForm')"
        >提交</el-button
      >
      <el-button @click="resetForm('validateForm')">重置</el-button>
    </div>
  </div>
</template>
<script>
import { config } from '../config'
import { getDetail, create, update } from '@/api/product'
import { fetchList } from '@/api/product-category'
import { baseApi, baseHost } from '@/utils'
import ClassicEditor from '@givebest/ckeditor5-custom-build'
import '@givebest/ckeditor5-custom-build/build/translations/zh-cn.js'
import { getToken } from '@/utils/auth'

const token = getToken()
const Authorization = `Bearer ${token}`

const { routePath } = config

export default {
  name: 'ProductCreateUpdate',
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
        name: '',
        route: '',
        category: '',
        pic: '',
        recommend: false,
        intro: '',
        content: '',
        status: true,
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          {
            min: 1,
            max: 100,
            message: '长度在 1 到 100 个字符',
            trigger: 'blur',
          },
        ],
        category: [
          {
            required: true,
            message: '请选择分类',
            trigger: 'change',
          },
        ],
        pic: [
          {
            required: true,
            message: '请上传图片',
            trigger: 'change',
          },
        ],
        content: [{ required: true, message: '请输入详情', trigger: 'change' }],
      },

      categoryList: [],

      // 文件上传
      uploadHeaders: {
        Authorization,
      },
      uploadFile: {
        list: [],
        limit: 1,
      },

      // 编辑器
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            // 'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo',
            'imageInsert',
          ],
        },
        language: 'zh-cn',
        image: {
          toolbar: [
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
          ],
        },
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
        },
        simpleUpload: {
          uploadUrl: `${baseApi}/upload`,
          withCredentials: true,
          headers: {
            Authorization,
          },
        },
      },
    }
  },
  watch: {},
  created() {
    this.getQuery()
    this.getCategoryList()
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

    // 选择分类
    onChoiceCategory(value) {
      console.log('onChoiceCategory', value)
    },

    // 清空分类选择
    onResetCategory() {
      this.formData.category = []
    },

    // 文件上传添加
    onUploadChange(res) {
      this.formData.pic = res.path
    },

    // 文件移除
    onRemoveChange(file) {
      let res = file.response || {}

      let index = this.formData.pic.indexOf(res.path)
      this.formData.pic.splice(index, 1)
    },

    // 超出文件
    onUploadExceed() {
      this.$message({
        message: '超出上传数量',
        type: 'error',
      })
      console.log('onUploadExceed')
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
          this.$router.push(`${routePath}list`)
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
          this.$router.push(`${routePath}list`)
        }, 1000)
      })
    },

    // 详情
    getDetail() {
      this.loading = true

      getDetail(this.querys.id).then(res => {
        this.loading = false

        const { pic } = res
        if (pic) {
          this.uploadFile.list.push({
            name: pic,
            url: baseHost + pic.replace('public/', '/'),
          })
        }

        this.formData = res
      })
    },

    // 分类列表
    getCategoryList() {
      fetchList().then(res => {
        this.categoryList = res.data || []
      })
    },
  },
}
</script>
