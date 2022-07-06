<template>
  <div class="index">
    <!-- 右侧首页 -->
    <!-- 走马灯 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in imgLists" :key="item">
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
    <!-- 卡片 -->
    <!-- gutter属性用来指定每一栏之间的间隔 -->
    <div class="card">
      <el-row :gutter="20">
        <el-col :span="6" v-for="o in cardLists" :key="o.img" >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="o.img" class="image">
            <div>
              <span>{{o.title}}</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      imgLists:[
        require('@/assets/img/banner1.jpg'),
        require('@/assets/img/banner2.jpg'),
        require('@/assets/img/banner3.jpg'),
      ],
      cardLists:[
        {title: 'one',img: require('@/assets/img/1.png')},
        {title: 'two',img: require('@/assets/img/2.png')},
        {title: 'three',img: require('@/assets/img/3.png')},
        {title: 'four',img: require('@/assets/img/4.png')},
      ],
      currentDate: new Date()
    }
  }
}
</script>

<style scoped>
.index {
  text-align: center;
}
/* 走马灯 */
  /* .index{
    height: 310px;
    overflow-y:hidden;
  } */
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
/* 卡片 */
  /* .el-col{
    height: 310px;
  } */
    .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  /* .button {
    padding: 0;
    float: right;
  } */

  .image {
    width: 100%;
    height: 283px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>