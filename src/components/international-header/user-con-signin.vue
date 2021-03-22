<template>
  <div class="item" tabindex="0">
    <img :src=imgUrl class="bili-avatar-img-radius" alt="" height="36" width="36">
  </div>
  <div class="item" tabindex="0">
    <span class="name">大会员</span>
  </div>
  <div class="item" tabindex="0">
    <span class="name">消息</span>
  </div>
  <div class="item" tabindex="0">
    <span class="name">动态</span>
  </div>
  <div class="item" tabindex="0">
    <span class="name">收藏</span>
  </div>
  <div class="item" tabindex="0">
    <span class="name">历史</span>
  </div>
  <div class="item" tabindex="0">
    <span class="name">创作中心</span>
  </div>
</template>

<script>
import imgUrl from '../../../static/image/头像.jpg'

export default {
  data(){
    return {
      imgUrl
    }
  },
  setup() {
    
  },
}
</script>

<style lang="less" scoped>
.item{
  line-height: 30px;
  height: 30px;
  width: 46px;
  display: flex;
  margin-left: 12px;
  cursor: pointer;

  .name{
    color: #fff;
    text-shadow: 0 1px 1px rgb(0 0 0 / 30%);
    white-space: nowrap;
  }
}
.item:nth-of-type(1){
  height: 36px;
}
.bili-avatar-img-radius {
  border-radius: 50%;
}
</style>