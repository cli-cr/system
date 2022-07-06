<template>
  <div>
    <!-- 无子级 -->
      <el-menu-item :index="basePath" v-if="!item.child">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>

      <!-- 有子级 -->
      <el-submenu :index="basePath" v-else>
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>{{item.name}}</span>
          </template>
          <NavItem v-for="sub in item.child" :key="sub.url" :item="sub" :basePath="sub.url"></NavItem>
      </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  data(){
    return {

    }
  },
  // 父传给子的数据
  props:['item','basePath'],
  methods:{

  }
}
</script>

<style scoped>

</style>