<template>
  <div class="app-container">
    <div class="filter-container">
      <div class="filter-container__search">
        <el-input
          v-model="listQuery.keyword"
          clearable
          placeholder="请输入内容"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            type="primary"
            @click="onFilter"
            @keyup.enter.native="onFilter"
            >搜索</el-button
          >
        </el-input>
      </div>
      <div class="filter-container__ctrl">
        <el-button
          class="filter-item"
          style="margin-left: 10px;"
          type="primary"
          plain
          icon="el-icon-edit"
          @click="handleCreate"
        >
          {{ $t('table.add') }}
        </el-button>
      </div>
    </div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      stripe
      @selection-change="handleSelectionChange"
      id="tableList"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column label="标题">
        <template slot-scope="{ row }"> {{ row.name }} </template>
      </el-table-column>

      <el-table-column label="图片" align="center">
        <template slot-scope="{ row }">
          <el-popover placement="right" width="230" trigger="hover">
            <img :src="row.pic" style="width: 200px;" />
            <img :src="row.pic" slot="reference" style="width: 40px;" />
          </el-popover>
        </template>
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
    <div class="el-table__footer">
      <el-button
        type="danger"
        plain
        :disabled="selectedRows.length <= 0"
        @click="handleDelete(selectedRows)"
        >删除选中
      </el-button>
    </div>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import { config } from './config'
import { fetchList, remove } from '@/api/home-about'
import waves from '@/directive/waves' // waves directive
import { formatDate, baseHost } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

let categoryList = {}
export default {
  name: 'HomeAboutList',
  components: {
    Pagination,
  },
  directives: {
    waves,
  },
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
      list: [],
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
      fetchList(this.listQuery).then(res => {
        const { data = [], total = 0 } = res

        this.list = data.map(v => {
          let pic = v.pic
          if (pic) {
            v.pic = baseHost + pic.replace('public/', '/')
          }
          return v
        })

        this.total = total

        this.listLoading = false
      })
    },

    // 添加事件
    handleCreate() {
      this.$router.push(`/home${config.routePath}create`)
    },

    // 编辑信息
    handleUpdate(row) {
      this.$router.push({
        path: `/home${config.routePath}update`,
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

    handleSelectionChange(val) {
      this.selectedRows = val
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
