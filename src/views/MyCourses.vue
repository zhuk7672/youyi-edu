<template>
  <div class="tabs font-18 flex-box">
    <div class="row acti">待上课程</div>
    <div class="row">预约课程</div>
    <div class="row">我的课表</div>
  </div>
  <div class="myCourses">
    <!-- <TodayCourses></TodayCourses> -->
    <ReservationCourses></ReservationCourses>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'
import TodayCourses from '@/components/List/TodayCourses.vue';
import ReservationCourses from '@/components/List/ReservationCourses.vue';


</script>
<style lang="stylus" scoped>
.myCourses
  position relative
  width 98%
  min-height 832px
  margin 0 auto 
  border-radius 0 10px 10px 10px
  background-color #fff
.tabs
  width 98%
  margin 18px auto 0
  .row
    width 132px
    height 64px
    border-radius 5px 5px 0 0
    text-align center
    line-height 64px
    font-size 18px
    border-top 2px solid #fff
    cursor pointer
    &.acti,&:hover
      background-color #fff
      color #0c3875
      border-color #0c3875
</style>