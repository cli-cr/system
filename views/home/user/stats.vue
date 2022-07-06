<template>
  <div>
    <!-- 用户统计 -->
    <!-- 进度条 -->
    <el-progress :text-inside="true" :stroke-width="22" :percentage="num" status="warning"></el-progress>
    <!-- 步骤条 -->
    <el-steps :active="active" finish-status="success">
      <el-step v-for="item in steps" :key="item" :title="item"></el-step>
    </el-steps>
    <el-button v-show="flag" style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 步骤条的初始化
      active:0,
      steps: ['步骤1','步骤2','步骤3','步骤4','步骤5'],
      // 默认下一步按钮是显示的
      flag: true,
    }
  },
  methods: {
    next(){
      if(this.active++ >= this.steps.length-1){
        this.$confirm('任务完成').then(res => {
          this.flag = false;
        })
      }
    }
  },
  computed:{
    num(){
      return this.active/this.steps.length*100;
    }
  }
}
</script>

<style>

</style>