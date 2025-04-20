<template>
  <div class="topBox flex-box publicBox">
    <div class="box flex-box flex-align-center ">
      <div class="avatar"><img src="@/assets/img/pic1.png" alt=""></div>
      <div class="text">
        <p class="font-16 mb40">早上好，张子枫~</p>
        <p class="font-16">本月共上 <span class="color-0c">12小时</span>，超过60%的学生，出勤率为20%。</p>
      </div>
    </div>
    <div class="box pt20">
      <ul class="flex-box font-16">
        <li>
          <div class="title">总课时数</div>
          <p class="color-0c">80节</p>
        </li>
        <li>
          <div class="title">已上课时</div>
          <p class="color-0c">80节</p>
        </li>
        <li>
          <div class="title">剩余课时</div>
          <p class="color-0c">80节</p>
        </li>
        <li>
          <div class="title">完课率</div>
          <p class="color-red">33.8%</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="wp flex-box flex-pack-between">
    <div class="timetable publicBox">
      <div class="leftTitle font-16 color-white bg0c">近期课表</div>
    </div>
    <div class="courseReminder publicBox">
      <div class="leftTitle font-16 color-white bgbf">近期课表</div>
      <div class="list">
        <div class="row flex-box flex-align-center">
          <div class="avatar"><img src="@//assets/img/avatar1.png" alt=""></div>
          <div class="text">
            <p class="font-16"><el-text class="w-150px mb-2" truncated>
                刘老师
              </el-text></p>
            <p class="font-18">2019-02-25</p>
          </div>
          <div class="text">
            <p class="font-16">物理</p>
            <p class="font-18">15:30-17:30</p>
          </div>
          <div class="btn bg02 color-white font-14">进入教室</div>
        </div>
        <div class="row flex-box flex-align-center">
          <div class="avatar"><img src="@//assets/img/avatar1.png" alt=""></div>
          <div class="text">
            <p class="font-16">刘老师</p>
            <p class="font-18">2019-02-25</p>
          </div>
          <div class="text">
            <p class="font-16">物理</p>
            <p class="font-18">15:30-17:30</p>
          </div>
          <div class="btn bg02 color-white font-14 disable">进入教室</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'


</script>
<style lang="stylus" scoped>
.list
  width 96%
  height 550px
  padding-top 56px
  margin 0 auto
  overflow-y auto
  .row
    width 100%
    padding 30px 25px
    background-color #f5f9fe
    margin-bottom 26px
    .btn
      width 108px
      height 32px
      line-height 32px
      border-radius 30px
      text-align center
      cursor pointer
      &:hover
        opacity 0.8
      &.disable
        background #c4c4cb
        cursor default
    .avatar
      width 80px
      height 80px
      border-radius 50%
      overflow hidden
      background-color #fff
      margin-right 40px
      img
       width 100%
       height 100%
    .text
      margin-right 45px
      line-height 1.2
      p
        margin-bottom 30px
        &:last-child
          margin-bottom 0
.wp
  width 97%
  margin 0 auto
.publicBox
  width 49%
  background-color #fff
  border-radius 15px
  box-shadow 0 0 1px rgba(0,0,0,0.1)
.bg0c
  background-color #0c3875
.bgbf
  background-color #bfa475
.leftTitle
  border-radius 15px 0 15px 0
  width 133px
  line-height 40px
  text-align center
.timetable,.courseReminder
  min-height 623px

.pt20
  padding-top 20px
.mb40
  margin-bottom 40px
.topBox
  width 97%
  border-radius 15px
  padding 30px 50px
  margin 36px auto
  .box
    position relative
    flex 1 1 0
    line-height 1.3
    &:after
      content ""
      position absolute
      right 0
      top 0
      width 2px
      height 134px
      background-color #f3f3f3
      display block
    &:last-child
      &:after
        display none
    ul
      width 100%
      li
        flex 1 1 0
        line-height 1.4
        text-align center
        .title
          margin-bottom 40px
     
    .avatar
      position relative
      width 126px
      height 126px
      border-radius 50%
      overflow hidden
      background-color #fff
      border 1px solid #ebedf1
      margin-right 56px
      img
        position absolute
        top 50%
        left 50%
        width 80px
        height 80px
        border-radius 50%
        transform translate(-50%,-50%)
</style>