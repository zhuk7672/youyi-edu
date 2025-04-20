<template>
  <div class="content">
    <div class="close"></div>
    <div class="clear"></div>
    <h2 class="font-22">修改密码</h2>
    <div class="from">
      <div class="row flex-box flex-pack-between flex-align-center">
        <div class="icon i1"></div>
        <div class="input"><input type="text" placeholder="请输入您的手机号码"></div>
      </div>
      <div class="row flex-box flex-pack-between flex-align-center">
        <div class="icon i2"></div>
        <div class="input flex-box flex-pack-between">
          <input type="text" placeholder="请输入您的验证码">
          <div class="yzm font-14 color-white bg02">获取验证码</div>
        </div>
      </div>
      <div class="row flex-box flex-pack-between flex-align-center">
        <div class="icon i3"></div>
        <div class="input flex-box flex-pack-between">
          <input :type="lookFlag?'password':'text'" class="font-16" name="password" minlength="6" maxlength="20"
            pattern="^(?=.*[A-Za-z])(?=.*\d).{6,20}$" placeholder="请输入6-20位密码。包含字母和数字，区分大小写">
          <div class="look" @click="lookFlag=!lookFlag"></div>
        </div>
      </div>
      <div class="row flex-box flex-pack-between flex-align-center">
        <div class="icon i3"></div>
        <div class="input flex-box">
          <input type="password" placeholder="请重新输入密码">
        </div>
      </div>
      <div class="confirm bg02 font-22 color-white">确 定</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'

const lookFlag = ref(false)

</script>
<style lang="stylus" scoped>
.close
  position absolute
  right 20px
  top 20px
  width 30px
  height 30px
  background url('@/assets/img/close.png') no-repeat center center
  background-size 23px 22px
  cursor pointer
  &:hover
    animation spin 0.3s ease-in-out  // 使用动画

.clear
  height 1px
.confirm
  position absolute
  bottom 0
  left 50%
  width 383px
  border-radius 30px
  font-weight bold
  text-align center
  line-height 56px
  transform translate(-50%,82px)
  cursor pointer
  &:hover
    opacity 0.8
.yzm
  border-radius 30px
  text-align center
  width 108px
  height 32px
  line-height 32px
.look
  background url('@/assets/img/icon7.png') no-repeat center center
  background-size 34px 24px
  width 34px
  height 24px
  margin-right 40px
  margin-top 10px
  cursor pointer
.content
  position relative
  width 680px
  min-height 470px
  background-color #fff
  border-radius 10px
  margin 168px auto
  h2
    color #333
    margin 40px 0
    text-align center
.from
  width 82%
  margin 0 auto
  .row
    margin-bottom 26px
    .icon
      width 30px
      height 30px
      &.i1
        background url('@/assets/img/icon3.png') no-repeat center center
        background-size 17px 29px
      &.i2
        background url('@/assets/img/icon9.png') no-repeat center center
        background-size 25px 29px
      &.i3
        background url('@/assets/img/icon4.png') no-repeat center center
        background-size 18px 25px
    .input
      width calc(100% - 65px)
      border-bottom 1px solid #e9e9e9
      input
        width 76%
        line-height 56px
        font-size 16px
        &::placeholder
          color #aaaaaa

@keyframes spin 
  0% 
    transform rotate(0deg) 
  100% 
    transform rotate(180deg) // 顺时针旋转2圈

</style>