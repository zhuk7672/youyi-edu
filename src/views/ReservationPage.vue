<template>
  <div class="publicWrap">
    <div class="title font-18 flex-box flex-pack-center">
      预约课程
    </div>
    <div class="content">
      <div class="top flex-box flex-align-center lh12">
        <strong class="font-20">王老师 - 精品课</strong>
        <strong class="font-20">2019年5月</strong>
      </div>
      <div class="btns flex-box">
        <div class="switch flex-box">
          <div class="prev btn"></div>
          <div class="next btn"></div>
        </div>
        <div class="toDay"> </div>
      </div>
      <div class="dateBox flex-box font-16 flex-wrap">
        <div class="row">
          <div class="top flex-box flex-align-center flex-pack-center">MON</div>
        </div>
        <div class="row">
          <div class="top flex-box flex-align-center flex-pack-center">TUE</div>
        </div>
        <div class="row">
          <div class="top flex-box flex-align-center flex-pack-center">WED</div>
        </div>
        <div class="row">
          <div class="top flex-box flex-align-center flex-pack-center">THU</div>
        </div>
        <div class="row">
          <div class="top flex-box flex-align-center flex-pack-center">FRI</div>
        </div>
        <div class="row">
          <div class="top flex-box flex-align-center flex-pack-center">STA</div>
        </div>
        <div class="row">
          <div class="top flex-box flex-align-center flex-pack-center">SUN</div>
        </div>
        <div class="row r1"><span>29</span></div>
        <div class="row r1"><span>30</span></div>
        <div class="row"><span>1</span>
          <div class="btn bg02">15:06 初一 数学</div>
        </div>
        <div class="row"><span>2</span></div>
        <div class="row"><span>3</span></div>
        <div class="row"><span>4</span></div>
        <div class="row"><span>5</span></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'


</script>
<style lang="stylus" scoped>
.dateBox
  border 1px solid #dddddf
  border-radius 10px
  .row
    height 84px
    // line-height 68px
    border-right 1px solid #dddddf
    // flex 1 0 14.285%
    min-width 14.285%
    border-bottom 1px solid #dddddf
    &:nth-child(7n)
      border-right none
    &:nth-last-child(-n + 7)
      border-bottom none
    &.r1
      span
        color #999
    span
      display inline-block
      margin 12px 18px
      line-height 1.2
      text-align left
    div
      height 100%
    .btn
      width 96%
      height 30px
      line-height 30px
      text-align center
      color #fff
      font-size 14px
      border-radius 30px
      margin 0 auto
      cursor pointer
      &:hover
        opacity 0.8 
.btns
  margin-bottom 45px
.switch
  position relative
  width 133px
  height 39px
  background url('@/assets/img/icon12.png') no-repeat center center
  background-size 100% 100%
  margin-right 16px
  cursor pointer
  .btn
    width 50%
    height 100%
    background-color rgba(#fff,0)
    &:hover
      background-color rgba(#fff,.2)
.toDay
  width 67px
  height 39px
  background url('@/assets/img/today.png') no-repeat center center
  background-size 100% 100%
  cursor pointer
  &:hover
    opacity 0.8
.title
  width 132px
  height 64px
  border-radius 5px 5px 0 0
  text-align center
  line-height 64px
  font-size 18px
  border-top 2px solid #0c3875
  color #0c3875
  background-color #fff

.content
  background-color #fff
  padding 50px 80px
  .top
    margin-bottom 34px
    strong
      &:last-child
        margin-left 40%
</style>