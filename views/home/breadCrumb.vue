<template>
    <el-header>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="v in lists" :key="v.path">
          {{v.meta.title}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
</template>

<script>
export default {
  name: "breadCrumb", 
  data(){
    return {
      lists: []
    }
  },
  // 搭配mounted实现实时更新
  watch: {
    $route(to,from){
      console.log(to);
      this.lists = to.matched;
    }
  },
  methods: {

  },
  mounted() {
    this.lists = this.$route.matched;
    // console.log(this.$route.matched);
  },
  
}
</script>

<style>
  .el-header {
    /* background-color: #B3C0D1; */
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  

</style>