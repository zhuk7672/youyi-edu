<template>
  <header class="flex-box flex-pack-between">
    <div class="logo"><img src="@/assets/img/pic2.jpg" alt=""></div>
    <div class="user flex-box flex-align-center">
      <div class="avatar"><img src="@/assets/img/pic1.png" alt=""></div>
      <div class="name">张子枫</div>
      <div class="btn"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'


</script>
<style lang="stylus" scoped>
header
  height 98px
  background-color #bfa475
  .avatar
    width 54px
    height 54px
    border-radius 50%
    overflow hidden
    img
      width 100%
      height 100%
  .name
    font-size 18px
    color #fff
    margin 0 15px
  .btn
    width 32px
    height 32px
    background url('@/assets/img/icon6.png') no-repeat center center
    background-size 100% 100%
    margin-right 40px
</style>