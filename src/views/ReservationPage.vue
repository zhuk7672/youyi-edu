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
    <div class="mask">
      <div class="pup">
        <div class="top flex-box flex-pack-between flex-align-center fwb color-33 font-22">预约时间 2025-03-01 <img
            src="@/assets/img/close.png" alt="" class="close"></div>
        <div class="reservationDate font-16 color-33 lh12">
          <div class="row flex-box flex-align-center">
            <p>可预约时间：</p>
            <div class="yyDate">
              <p>11：00 - 12：00</p>
              <div class="slide">
                <ul>
                  <li>10：00 - 11：00</li>
                  <li>11：00 - 12：00</li>
                  <li>12：00 - 13：00</li>
                  <li>13：00 - 14：00</li>
                  <li>14：00 - 15：00</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row flex-box flex-align-center">
            <p>&nbsp;&nbsp;&nbsp;可用课时：</p>
            <p>0</p>
            <div class="payDate bg02 font-14 color-white">购买课时</div>
          </div>
          <div class="row flex-box flex-align-center">
            <p>&nbsp;&nbsp;&nbsp;消耗课时：</p>
            <p>1</p>
          </div>

          <!-- 预约成功 -->
          <div class="row flex-box flex-align-center">
            <p>&nbsp;&nbsp;&nbsp;王老师：</p>
            <p>精品课</p>
          </div>
          <div class="row flex-box flex-align-center">
            <p>上课时间：</p>
            <p>2025-03-01 11：00 - 12：00</p>
          </div>
          <div class="row hide">
            <div class="success2 flex-box flex-pack-center flex-wrap flex-align-center">
              <img src="@/assets/img/success2.png" alt="">
              <p class="font-16 fwb">预约成功</p>
            </div>
          </div>

          <div class="button font-22 fwb flex-box flex-pack-center">
            <div class="btn cancel">取 消</div>
            <div class="btn sure bg02 color-white">确 定</div>
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
.reservationDate
  padding 30px 45px 40px
  .button
    width 100%
    margin-top 220px
    .btn
      width 133px
      height 58px
      line-height 58px
      text-align center
      border-radius 30px
      margin 0 8px
      cursor pointer
      &.cancel
        border 1px solid #666666
        color #666
  .row
    margin-bottom 20px
    .yyDate
      position relative
    .slide
      position absolute
      z-index 1
      top 0
      left -2px
      border 1px solid #f2f2f2
      border-radius 10px
      width 332px
      background-color #fff
      display none
      ul
        width 100%
        li
          line-height 60px
          text-align center
          font-size 16px
          color #333
          &:hover
            color #fff
            background: linear-gradient(90deg, #024c9c 15%, #040c23);
    .success2
      width 100%
      padding 100px 0
      img
        width 81px
        height 81px
        margin 0 auto 20px
      p
        width 100%
        margin 0
        text-align center
        color #05aa38
    p
      &:first-child
        margin-right 10px
    .payDate
      width 78px
      line-height 28px
      text-align center
      margin-left 35px  
      border-radius 6px
      cursor pointer
      &:hover
        opacity 0.8
.pup
  position absolute
  z-index 10
  left 50%
  top 50%
  transform translate(-50%,-50%)
  min-width 650px
  background-color #fff
  border-radius 10px
  .top
    height 72px
    line-height 72px
    border-bottom 1px solid #e7e7e7
    padding 0 35px
    .close
      width 23px
      height 22px
      vertical-align middle
      cursor pointer
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