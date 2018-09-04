<template>
  <div id="app">
    <v-header></v-header>
     <div class="tab">
        <div class="tab-item">商品</div>
        <div class="tab-item">评论</div>
        <div class="tab-item">商家</div>
     </div>
     <div class="content">
       i am content
     </div>
     <embed id="pdfPlayer" src="抱朴二号私募证券投资基金20180801-20180831.pdf" type="application/pdf" width="100%" height="100%" >
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
    background:red;
    #app{
      .tab{
        display:flex;
        width:100%;
      }
    }
  }
</style>
