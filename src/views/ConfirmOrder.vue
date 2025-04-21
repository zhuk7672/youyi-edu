<template>
  <div class="publicWrap">
    <div class="bg2">
      <div class="publicTitle">确认订单信息</div>
      <div class="orders w93">
        <div class="row flex-box flex-align-center">
          <div class="good font-20 color-33 flex-box flex-wrap">
            <div class="pic"><img src="" alt=""></div>
            <div class="text">
              <strong>熊猫老师课程</strong>
              <p>类型：精品课</p>
            </div>
          </div>
          <div class="price font-20 flex-pack-center flex-box"> <span>¥</span><b class="font-30">20.0</b></div>
          <div class="sum flex-box flex-pack-center">
            <div class="box flex-box">
              <div class="minus font-24 color-33">-</div>
              <input type="text" value="1" class="font-20 color-33">
              <div class="add font-24 color-33">+</div>
  
            </div>
          </div>
          <div class="subtotal flex-box flex-pack-center flex-align-center font-20  color-33">小计 <span>¥<b
                class="font-30">40.0</b></span></div>
        </div>
      </div>
    </div>
    <div class="bottomSettlement">
      <div class="w93 flex-box flex-pack-end flex-align-center">
        <p class="font-20 color-33">合计 <span>¥<b class="font-30">40.0</b></span></p>
        <div class="goPay color-white font-20">去结算</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'


</script>
<style lang="stylus" scoped>
.bottomSettlement
  padding 25px 0
  background-color #f5f9fe
  span
    color #ff5000
    margin-left 28px
  .goPay
    width 208px
    line-height 70px
    text-align center
    border-radius 6px
    background: linear-gradient(90deg, #e98d44 15%, #d1610d);
    margin-left 90px
    margin-right 110px
.orders
  min-height 570px
  .row
    width 100%
    min-height 162px
    padding 60px 0
    .subtotal
      span
        position relative
        top -3px
        margin-left 30px
        color #ff5000
    .sum
      .box
        width 116px
        height 38px
        border 1px solid #d7d7d7
        border-radius 6px
        text-align center
        line-height 38px
        .add
          border-left 1px solid #d1d1d1
          cursor pointer
          width 33.333%
        .minus
          border-right 1px solid #d1d1d1
          cursor pointer
          width 33.333%
        input
          height 100%
          width 33.333%
          text-align center

    .good
      flex 1 1 0
    .price
      flex 1 1 0
      span
        position relative
        top 8px
    .sum
      flex 1 1 0
    .subtotal
      flex 1 1 0
    .good
      .pic
        width 162px
        height 162px
        border-radius 6px
        margin-right 35px
        overflow hidden
      .text
        padding-top 26px
        strong
          display block
          margin-bottom 26px
</style>