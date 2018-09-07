<template>
  <div id="app">
    <v-header></v-header>
     <div class="tab">
        <div class="tab-item">
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>
     </div>
     <router-view/>
  </div>
</template>

<script>
import header from './components/header/header.vue';
export default{
  components: {
    'v-header': header
  }
};
</script>

<style lang="scss" type="text/css" rel="stylesheet/scss">
  body{
    #app{
      .tab{
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        // pc端dpi ,物理像素是设备像素的两倍
        .tab-item{
          flex: 1;
          text-align: center;
          & > a{
            display: block;
            font-size: 14px;
            color: #778593;
            // css规范
            // 布局（触发重排） - 宽高，文字结构（不可继承的，触发重绘或重排） - 字体、颜色（可继承，重绘但不影响重排）
            &.active{
              color: rgb(240, 20, 20)
            }
          }
        }
      }
    }
  }
</style>
