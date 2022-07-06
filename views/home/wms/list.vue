<template>
  <div>
    <!-- 列表展示 -->
    <!-- 折叠面板 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>列表展示</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="dialogVisible = true">添加列表项</el-button>
      </div>
      <el-collapse v-model="activeNames" @change="handleChange" accordion>
        <el-collapse-item v-for="item in items" :key="item.id" :title="item.title" :name="item.id">
          <div v-for="single in item.content" :key="single">
            {{single}}
          </div>
        </el-collapse-item>
        <!-- <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item> -->
      </el-collapse>
    </el-card>

    <!-- 对话框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>确定要添加数据吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      activeNames: ['1'],
      // 对话框初始化
      dialogVisible: false,
      items:[]       
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    getItems(){
      axios.get('/wms/list').then(res => {
        console.log(res);
        this.items = res.data.data.items;
      },err => {
        console.log(err);
      })
    },
    submit(){
      this.dialogVisible = false;
    }
  },
  mounted() {
    this.getItems();
  }
}
</script>

<style>

</style>