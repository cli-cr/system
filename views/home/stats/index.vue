<template>
  <div>
    <!-- 数据管理 -->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="filterDate"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterHandler"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      tableData: [],
      filterDate: [], //过滤后的日期
    }
  },
  methods: {
    getTable(){
      // 从接口取数据
      axios.get('/stats').then(res => {
        // console.log(res);
        // console.log(res.data.data.tableData);
        // 这里可以写成对象的解构的写法
        this.tableData = res.data.data.tableData;
        console.log(this.tableData);
        this.filterDate = this.tableData.map(item => ({text: item.date,value: item.date}));
        console.log(this.filterDate);
      },err => {
        console.log(err);
      })
    },
    filterHandler(value, row,column) {
      // 通用的筛选功能
      // console.log(column);
      // 这里就是对象读取属性的第二种写法
      const property = column['property'];
      return row[property] === value;
      },
  },
  mounted(){
    this.getTable();
  }
}
</script>

<style>

</style>