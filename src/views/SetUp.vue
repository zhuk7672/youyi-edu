<template>
  <div class="publicWrap">
    <div class="topBox font-22"><b>设置</b></div>
    <div class="tabs font-18 flex-box">
      <div class="row acti">个人资料</div>
      <div class="row">安全中心</div>
      <div class="row">关于我们</div>
    </div>
    <div class="content bg2 w98">
      <div class="userInfo ">
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
      <div class="securityCenter">
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
    <div class="mask">
      <!-- 修改头像 -->
      <div class="pup hide">
        <img src="@/assets/img/close.png" alt="" class="close">
        <h2 class="font-22">上传头像</h2>
        <div class="avatar"><img src="" alt=""></div>
        <div class="btns flex-box flex-pack-center">
          <div class="btn bgbf color-white font-16">点击上传</div>
          <div class="btn bg02 color-white font-16">保存修改</div>
        </div>
      </div>
      <!-- 修改密码 -->
      <div class="pup pd60 hide">
        <img src="@/assets/img/close.png" alt="" class="close">
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
              <input :type="lookFlag ? 'password' : 'text'" class="font-16" name="password" minlength="6" maxlength="20"
                pattern="^(?=.*[A-Za-z])(?=.*\d).{6,20}$" placeholder="请输入6-20位密码。包含字母和数字，区分大小写">
              <div class="look" @click="lookFlag = !lookFlag"></div>
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
      <!-- 绑定微信 -->
      <div class="pup pd150">
        <img src="@/assets/img/close.png" alt="" class="close">
        <h2 class="font-22">提醒</h2>
        <div class="qrCod ">
          <p>扫描下方二维码，绑定微信号</p>
          <img src="@/assets/img/qr-code.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'
// import ChangePwd from '@/views/ChangePwd.vue';
const lookFlag = ref(false)


</script>
<style lang="stylus" scoped>
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
.from
  width 555px
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
.mask
  position fixed
  z-index 10
  top 0
  left 0
  width 100%
  height 100%
  background rgba(#000,.5)
  .pup
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    background #fff
    border-radius 10px
    padding 30px
    .qrCod
      p
        margin-bottom 34px
        line-height 1.2
      img
        width 208px
        height 212px
    &.pd60
      padding 30px 60px
    &.pd150
      padding 30px 150px 60px
    .btns
      position absolute
      bottom -70px
      left 0
      width 100%
      .btn
        width 134px
        line-height 40px
        text-align center
        border-radius 30px
        margin 0 58px
    .close
      position absolute
      top 20px
      right 20px
      width 23px
      height 22px
      cursor pointer
      background url('@/assets/img/close.png') no-repeat center center
      background-size 100% 100%
    h2
      margin 20px 0 50px
      text-align center
    .avatar
      width 300px
      height 300px
      border-radius 6px
      margin 0 158px 20px

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