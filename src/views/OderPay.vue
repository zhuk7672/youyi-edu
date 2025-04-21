<template>
  <div class="publicWrap">
    <div class="publicTitle">熊猫老师课程</div>
    <div class="payPrice font-22">订单金额 <span>¥<b class="font-30">40.0</b></span> 元</div>
    <div class="payList">
      <div class="row flex-box font-18 flex-align-center acti">
        <div class="round"></div>Fission支付
      </div>
      <div class="row flex-box font-18 flex-align-center">
        <div class="round"></div>余额支付（¥56.9）
      </div>
    </div>
    <div class="payCode flex-box flex-pack-center flex-wrap">
      <img src="@/assets/img/WeChat669b3d203799b44928c83ae6e1d23cb3.jpg" alt="">
      <p class="font-18">扫码快速支付</p>
    </div>
    <div class="mask">
      <div class="pup">
        <div class="top">
          <img src="@/assets/img/close.png" alt="" class="close">
        </div>
        <div class="oderInfo">
          <div class="tip fwb font-26 flex-box flex-pack-center flex-align-center"><img src="@/assets/img/success.png"
              alt="">够买成功</div>
          <p class="font-16 lh12">订单编号：6428346283462</p>
          <p class="font-16 lh12">PayPal支付：40.0元</p>
          <div class="btns font-22 flex-box flex-pack-center flex-align-center flex-wrap">
            <div class="btn lookOder">查看订单详情</div>
            <div class="btn lookNext">继续逛逛</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'


</script>
<style lang="stylus" scoped>
.oderInfo
  padding 85px 120px 100px
  .btns
    margin-top 75px
    .btn
      width 192px
      height 56px
      border-radius 30px
      text-align center
      margin 0 8px
      line-height 56px
      &.lookOder
        border 1px solid #666666
        color #666
      &.lookNext
        color #fff
        background linear-gradient(90deg, #e98c43 15%, #d1610d)

  p
    color #333
    margin-bottom 25px
    text-align center
  .tip
    color #05aa38
    vertical-align middle
    line-height 47px
    margin-bottom 40px
    img
      width 47px
      height 47px
      margin-right 17px
.pup
  position absolute
  top 50%
  left 50%
  transform translate(-50%,-50%)
  min-width 540px
  height 540px
  background-color #fff
  border-radius 10px
  .top
    line-height 72px
    text-align right
    padding-right 30px
    border-bottom 1px solid #e7e7e7
  .close
    cursor pointer
    width 23px
    height 22px
    vertical-align middle

.payCode
  margin-top 70px
  img
    width 222px
    height 224px
    margin 0 auto 30px
  p
    width 100%
    text-align center
.payPrice
  color #333
  text-align right
  padding 30px 34px
  span
    color #ff5000
.payList
  padding 0 34px
  .row
    line-height 100px
    border-bottom: 1px solid #e6e6e8;
    padding 0 20px
    transition 0.3s
    &:hover
      background-color #f5f9fe
    &.acti
      .round
        border-color #0c3875
        &:after
          content ''
          position absolute
          width 14px
          height 14px
          border-radius 50%
          background-color #0c3875
          left 50%
          top 50%
          transform translate(-50%,-50%)
    .round
      position relative
      width 20px
      height 20px
      border-radius 50%
      margin-right 30px
      border 1px solid #000
</style>