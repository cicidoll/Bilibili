<template>
  <international-header-vue class="international-header report-wrap-module"></international-header-vue>
  <first-screen-b-wrap class="first-screen b-wrap"></first-screen-b-wrap>
  <atorey-box-b-wrap class="storey-box b-wrap"></atorey-box-b-wrap>
  <a href="//www.bilibili.com/v/customer-service"
     target="_blank"
     class="contact-help">联系客服</a>
</template>

<script>
import HeaderVue from './international-home/header-vue.vue'
import FirstScreenBWrap from './international-home/first-screen-b-wrap.vue'
import AtoreyBoxBWrap from './international-home/atorey-box-b-wrap.vue'

export default {
  setup() {
    
  },
  components: {
    'international-header-vue': HeaderVue,
    'first-screen-b-wrap': FirstScreenBWrap,
    'atorey-box-b-wrap': AtoreyBoxBWrap
  }
}
</script>

<style scoped>
.contact-help{
  
}
</style>