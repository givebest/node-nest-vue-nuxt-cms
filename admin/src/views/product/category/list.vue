<template>
  <div class="app-container">
    <div class="filter-container">
      <div class="filter-container__search"></div>
      <div class="filter-container__ctrl">
        <el-button
          class="filter-item"
          style="margin-left: 10px;"
          type="primary"
          plain
          icon="el-icon-edit"
          @click="handleCreate"
        >
          添加
        </el-button>
      </div>
    </div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      border
      fit
      highlight-current-row
      stripe
      :data="list"
      id="tableList"
    >
      <el-table-column label="分类">
        <template slot-scope="{ row }"> {{ row.name }} </template>
      </el-table-column>

      <el-table-column
        sortable
        prop="updatedAt"
        :label="$t('table.updatedAt')"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.updatedAt | formatDate }}</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('table.status')"
        class-name="status-col"
        width="100"
      >
        <template slot-scope="{ row }">
          <el-tag :type="row.status | statusFilter" size="mini">
            {{ row.status ? '开启' : '停用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('table.actions')"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <el-button size="mini" @click="handleUpdate(row)">
            {{ $t('table.edit') }}
          </el-button>

          <el-button
            v-if="row.status != 'deleted'"
            size="mini"
            type="danger"
            plain
            @click="handleDelete(row)"
          >
            {{ $t('table.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { config } from './config'
import { fetchList, remove } from '@/api/product-category'
import { formatDate } from '@/utils'

export default {
  name: 'ProductCategoryList',
  filters: {
    statusFilter(status) {
      return status ? 'success' : 'info'
    },
    formatDate(date) {
      return formatDate(date)
    },
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id',
        keyword: '',
      },
      downloadLoading: false,
      selectedRows: [],
    }
  },
  watch: {
    'listQuery.keyword'(value) {
      if (value.length <= 0) {
        this.getList()
      }
    },
  },
  created() {
    this.getList()
  },
  methods: {
    // 列表
    getList() {
      this.listLoading = true
      fetchList().then(res => {
        const { data = [] } = res

        this.list = data

        this.listLoading = false
      })
    },

    // 添加事件
    handleCreate() {
      this.$router.push(`${config.routePath}create`)
    },

    // 编辑信息
    handleUpdate(row) {
      console.log('config.routePath', config.routePath)
      this.$router.push({
        path: `${config.routePath}update`,
        query: { id: row.id },
      })
    },

    // 删除
    handleDelete(row) {
      let ids = []
      if (Array.isArray(row)) {
        ids = row.map(v => v.id)
      } else {
        ids.push(row.id)
      }

      this.handleClose(() => {
        remove({
          ids,
        }).then(() => {
          this.$notify({
            title: '成功',
            message: '删除成功',
            type: 'success',
            duration: 2000,
          })
          this.getList()
        })
      })
    },

    // 删除提醒
    handleClose(done) {
      this.$confirm('确认删除？')
        .then(() => {
          done()
        })
        .catch(() => {})
    },

    // filter
    onFilter() {
      this.listQuery.page = 1
      this.getList()
    },
  },
}
</script>
