<template>
  <div class="publicWrap">
    <div class="topBox font-22"><b>设置</b></div>
    <div class="tabs font-18 flex-box">
      <div class="row acti">个人资料</div>
      <div class="row">安全中心</div>
      <div class="row">关于我们</div>
    </div>
    <div class="content bg2 w98">
      <div class="userInfo hide">
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
            <div class="row"><input class="font-16" type="text" value="女"></div>
            <div class="row">
              <div class="icon"></div>
            </div>
          </div>
          <div class="box flex-box flex-wrap flex-align-center">
            <div class="row">补习科目：</div>
            <div class="row"><input class="font-16" type="text" value="物理"></div>
            <div class="row">
              <div class="icon"></div>
            </div>
          </div>
          <div class="box flex-box flex-wrap flex-align-center">
            <div class="row">年级：</div>
            <div class="row"><input class="font-16" type="text" value="高一"></div>
            <div class="row">
              <div class="icon"></div>
            </div>
          </div>
          <div class="box flex-box flex-wrap flex-align-center">
            <div class="row">就读学校：</div>
            <div class="row"><input class="font-16" type="text" value="未设置"></div>
            <div class="row">
              <div class="icon"></div>
            </div>
          </div>
          <div class="box flex-box flex-wrap flex-align-center">
            <div class="row">学校级别：</div>
            <div class="row"><input class="font-16" type="text" value="未设置"></div>
            <div class="row">
              <div class="icon"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="securityCenter hide">
        <div class="title color-99 font-18">密码设置</div>
        <div class="box">
          <div class="row font-16 flex-box flex-pack-between bn">重置密码<span>修改</span></div>
        </div>
        <div class="title color-99 font-18">账号绑定（有助于账号丢失后快速找回）</div>
        <div class="box">
          <div class="row font-16 flex-box flex-pack-between">
            <p class="flex-1">修改手机</p>
            <p class="flex-1">156****2222</p> <span class="flex-1">修改</span>
          </div>
          <div class="row font-16 flex-box flex-pack-between bn">
            <p class="flex-1">绑定微信</p>
            <p class="flex-1">绑定微信，接收上课提醒</p> <span class="flex-1">修改</span>
          </div>
        </div>
      </div>
      <div class="aboutBox">
        <div class="title color-99 font-18">公司信息</div>
        <div class="box font-16 lh34 p50 w76">
          优益教育是基于互联网直播互动技术，以网络教学、名师在线教授为特色的个性化教育平台。<br>
          作为中小学1对1在线辅导高端品牌，优益教育依托百年交大优势，坚持“交大教研沉淀，名师五步授课”理念，独创“五位一体”陪伴式<br>
          教学，严选清、北、复、交、浙等高校毕以5位老师为单位，为学生定制个性化学习方案，并通过1对1在线辅导，让学生足不出户即可<br>
          享受高端教学服务，快速提升考试成绩。业的学霸老师，遵循六步教学流程，<br>
          <a class="color-2b" href="#">https://www.UEdu.cn/</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'


</script>
<style lang="stylus" scoped>

.p50  
  padding 40px 50px
.color-2b
  color #2d7bda
  &:hover
    text-decoration underline
    opacity 0.8
.securityCenter,.aboutBox
  .title
    margin-bottom 26px
  .box
    width 753px
    border-radius 6px
    margin-bottom 60px
    box-shadow 0 0 20px rgba(0,0,0,0.1)
    &.w76
      width 76%
    .row
      line-height 72px
      border-bottom 1px solid #f5f6f6
      padding 0 45px
      p
        &:last-child
          text-align center
      span
        color #89b969
        text-align right
        cursor pointer
        &:hover
          opacity 0.8
      &.bn
        border-bottom none
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
      text-align center
      padding-left 0
     .icon
      width 20px
      height 20px
      cursor pointer
      background url('@/assets/img/icon14.png') no-repeat center center
      background-size 20px 20px
      margin 0 auto
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