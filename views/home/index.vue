<template>
  <div>
    <!-- 布局页 -->
    <el-container>   
      <!-- 左侧导航 -->
      <navMenu></navMenu>
      <el-container>
        <!-- 右侧模块 -->
        <!-- 右侧的头部 -->
        <el-header>
          <breadCrumb></breadCrumb>
          <el-button class="exit" type="primary" @click="goBack">退出</el-button>
        </el-header>
        <!-- 右侧的主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from './navMenu.vue'
import breadCrumb from './breadCrumb.vue'
export default {
  name: 'home',
  components: {
    navMenu,
    breadCrumb
  },
  data(){
    return {

    }
  },
  methods: {
    goBack(){
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>
  .el-header{
    display:flex;
    justify-content:space-between;
    padding: 9px 20px;
    box-sizing: border-box;
    flex-shrink: 0;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    overflow-y: hidden;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
</style>