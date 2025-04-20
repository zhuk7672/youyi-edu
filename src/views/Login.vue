<template>
  <div class="container flex-box flex-justify-center flex-align-center">
    <div class="login">
      <div class="comb flex-box flex-pack-between">
        <div class="initial comb-btn"></div>
        <div class="close comb-btn"></div>
      </div>
      <div class="box">
        <h1 class="font-32 color-0c">欢迎来到优益教育!</h1>
        <div class="inputBox">
          <div class="row icon1"><input class="font-18" type="text" placeholder="请输入手机号"></div>
          <div class="row icon2"><input class="font-18" type="password" placeholder="请输入密码"></div>
          <div class="remember">
            <label>
              <input type="checkbox" checked>
              记住密码
            </label>
          </div>
          <div class="btn color-white font-22">进入教室</div>
          <div class="forget "><a href="#" class="font-16 color-99">忘记密码？</a></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'


</script>
<style lang="stylus" scoped>
.comb
  position absolute
  top 45px
  right 80px
  width 103px
  height 40px
  background url('@/assets/img/comb-btn.png') no-repeat left center
  background-size initial
  .comb-btn
    width 40px
    height 40px
    cursor pointer
.container
  width 100%
  height 100vh
.login
  position relative
  width 1579px
  height 823px
  background url('@/assets/img/bg1.png') no-repeat center center
  background-size cover
  margin 0 auto
  .box
    position absolute
    right 200px
    width 330px
    padding-top 294px
    h1
      margin-bottom 40px
      text-align center
    .inputBox
      .row
        position relative
        width 100%
        height 46px
        margin-bottom 24px
        border-radius 10px
        background-color #fff
        box-shadow 0 0 10px rgba(#bfa475,0.2)
        padding 10px 10px 10px 50px
        &.icon1
          background url('@/assets/img/icon1.png') no-repeat 20px center
          background-size 14px 24px
        &.icon2
          background url('@/assets/img/icon2.png') no-repeat 20px center
          background-size 18px 25px
        input
          width 100%
          height 26px
          &::placeholder
            color #0c3875
.remember
  font-size 16px
  color #999
  line-height 24px
  display flex
  width 100%
  label 
    line-height 24px
    height 24px
    vertical-align middle
    display flex
    align-items center
    margin-left auto
    &:hover
      color #0c3875
  input
    appearance: none;
    width 24px
    height 24px
    border-radius 6px
    border 1px solid #cccfd3
    margin-right 15px
.btn
  text-align center
  width 250px
  line-height 56px
  font-weight bold
  letter-spacing 4px
  border-radius 30px
  margin 27px auto 40px
  cursor pointer
  background: linear-gradient(135deg, #024d9e, #040c23);
.forget
  text-align center
  line-height 1.2
  a
    &:hover
      text-decoration underline
</style>
