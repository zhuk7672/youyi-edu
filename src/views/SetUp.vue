<template>
  <div class="publicWrap">
    <div class="topBox font-22"><b>设置</b></div>
    <div class="tabs font-18 flex-box">
      <div class="row acti">个人资料</div>
      <div class="row">安全中心</div>
      <div class="row">关于我们</div>
    </div>
    <div class="content bg2 w98">
      <div class="userInfo">
        <div class="user flex-box">
          <div class="left">
            <div class="avatar"><img src="@/assets/img/avatar1.png" alt=""></div>
            <div class="btn bg02 font-16 color-white">更换头像</div>
          </div>
          <div class="right font-16">
            <p>姓名：张子枫</p>
            <p>手机号：156****2222</p>
            <p>UID：1445008566</p>
            <div class="integrity flex-box flex-align-center">
              <p>资料完整度： </p>
              <div class="line"><span></span></div>
              <p>30%</p>
            </div>
          </div>
        </div>
        <div class="userData font-16">
          <div class="box flex-box flex-wrap flex-align-center">
            <div class="row">性别：</div>
            <div class="row"><span>女</span></div>
            <div class="row">
              <div class="icon"></div>
            </div>
          </div>
          <div class="box flex-box flex-wrap flex-align-center">
            <div class="row">补习科目：</div>
            <div class="row"><span>物理</span></div>
            <div class="row">
              <div class="icon"></div>
            </div>
          </div>
          <div class="box flex-box flex-wrap flex-align-center">
            <div class="row">年级：</div>
            <div class="row"><span>高一</span></div>
            <div class="row">
              <div class="icon"></div>
            </div>
          </div>
          <div class="box flex-box flex-wrap flex-align-center">
            <div class="row">就读学校：</div>
            <div class="row"><span>未设置</span></div>
            <div class="row">
              <div class="icon"></div>
            </div>
          </div>
          <div class="box flex-box flex-wrap flex-align-center">
            <div class="row">学校级别：</div>
            <div class="row"><span>未设置</span></div>
            <div class="row">
              <div class="icon"></div>
            </div>
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
.userData
  width 753px
  height 384px
  border-radius 6px
  margin-top 97px
  box-shadow 0 0 10px rgba(0,0,0,0.1)
  .box
    height 72px
    border-bottom 1px solid #f5f6f6
    .row
     flex 1 1 0
     padding-left 40px
     &:last-child
      justify-content center
     .icon
      width 20px
      height 20px
      cursor pointer
      background url('@/assets/img/icon14.png') no-repeat center center
      background-size 20px 20px
.content
  padding 50px 90px
.userInfo
  min-width 750px
  .user
    .left
      .avatar
        position relative
        width 126px
        height 126px
        border 1px solid #ebedf1
        border-radius 50%
        img
          position absolute
          top 50%
          left 50%
          border-radius 50%
          width 80px
          height 80px
          transform translate(-50%,-50%)
      .btn
        margin-top 20px
        width 116px
        height 40px
        border-radius 30px
        line-height 40px
        text-align center
        cursor pointer
        &:hover
          opacity 0.8
    .right
      margin-left 56px
      line-height 1.3
      padding-top 20px
      p
        margin-bottom 25px
      .integrity
        display flex
        align-items center
        p
          margin-bottom 0
        .line
          position relative
          width 180px
          height 20px
          background-color #ededed
          border-radius 20px
          margin-right 6px
          overflow hidden
          span
            position absolute
            top 0
            left 0
            width 30%
            border-radius 20px
            background-color #89b969
            height 100%
            display block
.topBox
  min-height 25px
  background url('@/assets/img/icon13.png') no-repeat 10px top
  background-size 16px 24px
  padding-left 42px
  margin-bottom 30px
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
      font-weight bold
      background-color #fff
      color #0c3875
      border-color #0c3875
</style>