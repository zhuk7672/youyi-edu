<template>
  <div class="sidebar">
    <router-link active-class="active" class="row home" to="/home">首页</router-link>
    <router-link active-class="active" class="row myCourses" to="/mycourses">我的课程</router-link>
    <router-link active-class="active" class="row help" to="/home3">帮助</router-link>
    <router-link active-class="active" class="row myCourses" to="/teachers">老师介绍</router-link>
    <!-- <div class="row home"><router-link class="row home" to="/home">首页</router-link></div>
    <div class="row myCourses"><router-link to="/home">我的课程</router-link></div>
    <div class="row help"><router-link to="/home">帮助</router-link></div> -->
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'

</script>
<style lang="stylus" scoped>
.sidebar
  width 267px
  // height 100vh
  min-height calc(100vh - 98px)
  background-color #f5f6f6
  padding-top 22px
  flex 1
  .row
   color #666
   line-height 56px
   font-size 16px
   padding-left 85px
   display block
   &.home
    background url('@/assets/img/icon5.png') no-repeat 27px center
    background-size 25px 21px
   &.myCourses
    background url('@/assets/img/icon10.png') no-repeat 31px center
    background-size 19px 21px
   &.help
    background url('@/assets/img/icon11.png') no-repeat 30px center
    background-size 21px 21px
   &:hover
      color #fff
      &.home
        background: 
          url('@/assets/img/icon5-1.png') no-repeat 27px center,  
          linear-gradient(90deg, #024d9e, #040c23)               
        background-size: 
          25px 21px,   
          100% 100%    
      &.myCourses
        background: 
          url('@/assets/img/icon10-1.png') no-repeat 31px center,  
          linear-gradient(90deg, #024d9e, #040c23)               
        background-size: 
          19px 21px,   
          100% 100%    
      &.help
        background: 
          url('@/assets/img/icon5-1.png') no-repeat 30px center,  
          linear-gradient(90deg, #024d9e, #040c23)               
        background-size: 
          21px 21px,   
          100% 100%    
</style>