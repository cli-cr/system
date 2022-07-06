<template>
  <div>
    <el-aside width="200px">
      <!-- 添加router属性让它可以实现路由跳转，index就是跳转到的页面 -->
      <el-menu
      default-active="$route.path" exact 
      class="el-menu-vertical-demo"
      router
      >
      <!-- 新版本:通过子组件（NavItem）的形式实现复用 -->
        <NavItem v-for="v in items" :key="v.url" :item="v" :basePath="v.url"></NavItem>
        <!-- 本来这种通过有无子级的分类是根据需要手动添加的，对于后面如果有需求的增加，通过手动
        来添加显得程序没有扩展性，于是通过分为有无子级来设置循环，根据data中提供的数据来循环遍历 -->
        <!-- 旧版本 -->
        <!-- 无子级 -->
        <!-- <el-menu-item index="/index">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item> -->

        <!-- 无子级 -->
        <!-- <el-menu-item index="/stats">
          <i class="el-icon-menu"></i>
          <span slot="title">数据管理</span>
        </el-menu-item> -->

        <!-- 有子级 -->
        <!-- <el-submenu index="/wms">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>信息管理</span>
            </template>
            <el-menu-item index="/wms/list">列表展示</el-menu-item>
        </el-submenu> -->

        <!-- 有子级 -->
        <!-- <el-submenu index="/user">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/user/stats">用户统计</el-menu-item>
            <el-menu-item index="/user/role">角色统计</el-menu-item>
        </el-submenu> -->
      </el-menu>
    </el-aside>
    
  </div>
</template>

<script>
import NavItem from './navItem.vue'
export default {
  name: 'navMenu',
  components:{
    NavItem
  },
  data(){
    return {
      items: [
        {name: '首页',url: '/index'},
        {name: '数据管理',url: '/stats'},
        {
          name: '信息管理',
          url: '/wms',
          child:[{name: '列表管理',url: '/wms/list'}]
        },
        {
          name: '用户管理',
          url: '/user',
          child:[
            {name: '用户统计',url: '/user/stats'},
            {name: '角色统计',url: '/user/role'}
            ]
        }
      ]
    }
  }
}
</script>

<style>
.el-aside {
    background-color: rgb(52, 64, 80);
    color: white;
    text-align: center;
    line-height: 200px;
  }
</style>