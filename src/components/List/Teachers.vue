<template>
  <div class="date bg02 color-white font-16">2018-12-26</div>
  <div class="list flex-box flex-wrap">
    <div class="box">
      <div class="pic">
        <div class="tip">XX大学</div>
      </div>
      <div class="text">
        <p class="flex-box flex-pack-between font-16"><span>刘老师</span><span>初一 物理</span></p>
        <div class="btns flex-box flex-pack-between">
          <div class="btn font-16 color-0c h-bg02">查看</div>
          <div class="btn font-16 color-0c h-bg02">购买</div>
          <div class="btn font-16 color-0c h-bg02">预约</div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="pic">
        <div class="tip">XX大学</div>
      </div>
      <div class="text">
        <p class="flex-box flex-pack-between font-16"><span>刘老师</span><span>初一 物理</span></p>
        <div class="btns flex-box flex-pack-between">
          <div class="btn font-16 color-0c h-bg02">查看</div>
          <div class="btn font-16 color-0c h-bg02">购买</div>
          <div class="btn font-16 color-0c h-bg02">预约</div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="pic">
        <div class="tip">XX大学</div>
      </div>
      <div class="text">
        <p class="flex-box flex-pack-between font-16"><span>刘老师</span><span>初一 物理</span></p>
        <div class="btns flex-box flex-pack-between">
          <div class="btn font-16 color-0c h-bg02">查看</div>
          <div class="btn font-16 color-0c h-bg02">购买</div>
          <div class="btn font-16 color-0c h-bg02">预约</div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="pic">
        <div class="tip">XX大学</div>
      </div>
      <div class="text">
        <p class="flex-box flex-pack-between font-16"><span>刘老师</span><span>初一 物理</span></p>
        <div class="btns flex-box flex-pack-between">
          <div class="btn font-16 color-0c h-bg02">查看</div>
          <div class="btn font-16 color-0c h-bg02">购买</div>
          <div class="btn font-16 color-0c h-bg02">预约</div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="pic">
        <div class="tip">XX大学</div>
      </div>
      <div class="text">
        <p class="flex-box flex-pack-between font-16"><span>刘老师</span><span>初一 物理</span></p>
        <div class="btns flex-box flex-pack-between res">
          
          <div class="btn font-16 color-0c h-bg02">预约</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'


</script>
<style lang="stylus" scoped>
  .date
    width 134px
    line-height 40px
    border-radius 4px
    margin-bottom 36px
    text-align center
  .list
    .box
      width 23.5%
      max-width 336px
      border-radius 10px
      overflow hidden
      background-color #f5f9fe
      margin-left 2%
      margin-bottom 20px
      &:first-child,&:nth-child(4n+1)
        margin-left 0
      .pic
        position relative 
        height 216px
        overflow hidden
        background url('@/assets/img/bg2.png') #e7e7e7 no-repeat center center
        background-size 133px 190px
        &:after
          content ""
          position absolute
          z-index 1
          top 0
          left 0
          width 100%
          height 100%
          background-color rgba(0,0,0,.5)
        .tip
          position absolute
          bottom 0
          right 0
          min-width 134px
          height 34px
          line-height 34px
          text-align center
          font-size 16px
          color #fff
          background-color rgba(0,0,0,.5)
      .text
        height 120px
        padding 28px
        line-height 1.3
        p
          margin-bottom 15px
        .btns
          &.res
            .btn
              margin-left auto
          .btn
            width 86px
            height 32px
            line-height 30px
            text-align center
            border 1px solid #0c3875
            border-radius 20px
            cursor pointer
        
</style>