<template>
  <div class="dt">
    <div class="title font-16">今日课程（2节）</div>
    <div class="list flex-box flex-pack-between flex-wrap">
      <div class="row flex-box flex-wrap flex-align-center">
        <div class="avatar"><img src="@/assets/img/avatar1.png" alt=""></div>
        <div class="text">
          <p class="lh12 flex-box">
            <el-text line-clamp="1">李老师</el-text>
            <el-text line-clamp="1">初一</el-text>
            <el-text line-clamp="1">物理</el-text>
          </p>
          <p class="font-18 lh12">2019-02-25 15:30-17:30</p>
        </div>
        <div class="btn bg02 font-14 color-white">进入教室</div>
      </div>
      <div class="row flex-box flex-wrap flex-align-center">
        <div class="avatar"><img src="@/assets/img/avatar1.png" alt=""></div>
        <div class="text">
          <p class="lh12 flex-box">
            <el-text line-clamp="1">李老师</el-text>
            <el-text line-clamp="1">初一</el-text>
            <el-text line-clamp="1">物理</el-text>
          </p>
          <p class="font-18 lh12">2019-02-25 15:30-17:30</p>
        </div>
        <div class="btn bg02 font-14 color-white">进入教室</div>
      </div>
      <div class="row flex-box flex-wrap flex-align-center">
        <div class="avatar"><img src="@/assets/img/avatar1.png" alt=""></div>
        <div class="text">
          <p class="lh12 flex-box">
            <el-text line-clamp="1">李老师李老师</el-text>
            <el-text line-clamp="1">初一</el-text>
            <el-text line-clamp="1">物理</el-text>
          </p>
          <p class="font-18 lh12">2019-02-25 15:30-17:30</p>
        </div>
        <div class="btn bg02 font-14 color-white">进入教室</div>
      </div>
      <div class="row flex-box flex-wrap flex-align-center">
        <div class="avatar"><img src="@/assets/img/avatar1.png" alt=""></div>
        <div class="text">
          <p class="lh12 flex-box">
            <el-text line-clamp="1">李老师李老师</el-text>
            <el-text line-clamp="1">初一</el-text>
            <el-text line-clamp="1">物理</el-text>
          </p>
          <p class="font-18 lh12">2019-02-25 15:30-17:30</p>
        </div>
        <div class="btn bg02 font-14 color-white">进入教室</div>
      </div>
      <div class="row flex-box flex-wrap flex-align-center">
        <div class="avatar"><img src="@/assets/img/avatar1.png" alt=""></div>
        <div class="text">
          <p class="lh12 flex-box">
            <el-text line-clamp="1">李老师李老师</el-text>
            <el-text line-clamp="1">初一</el-text>
            <el-text line-clamp="1">物理</el-text>
          </p>
          <p class="font-18 lh12">2019-02-25 15:30-17:30</p>
        </div>
        <div class="btn font-14 color-white bgc4">进入教室</div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'


</script>
<style lang="stylus" scoped>
.dt
  padding 50px 30px 30px

.title
  line-height 1.3
.list
  padding-top 36px
  &:after
    content ""
    width 32%    
  .row
    width 32%
    background-color #f5f9fe
    border-radius 10px
    overflow hidden
    padding 30px 25px 25px
    margin-bottom 20px
    .btn
      width 108px
      line-height 32px
      text-align center
      border-radius 30px
      margin-left auto
      cursor pointer
      &:hover
        opacity 0.8
    .avatar
      width 80px
      height 80px
      border-radius 50%
      margin-right 35px
      overflow hidden    
    .text
      p
        margin-bottom 15px
        &:last-child
          margin-bottom 0
        span
          color #000
          font-size 16px
          flex 1
          &:last-child
            text-align right
</style>