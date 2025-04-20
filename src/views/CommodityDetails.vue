<template>
  <div class="commodityDetails">
    <div class="bg-f mb30">
    <div class="w93">
      <div class="tabs flex-box">
        <span class="acti font-16 color-white">一对一</span>
        <span class=" font-16 color-white">小班课</span>
      </div>
      <div class="row header">
        <div class="col list-img">
          <div class="img">
          <img src="@/assets/img/details_img.png" alt="">
          </div>
          <div class="img">
            <img src="@/assets/img/details_img.png" alt="">
          </div>
          <div class="img">
            <img src="@/assets/img/details_img.png" alt="">
          </div>
          <div class="img">
            <img src="@/assets/img/details_img.png" alt="">
          </div>
          <div class="img">
            <img src="@/assets/img/details_img.png" alt="">
          </div>
        </div>
        <div class="col big-img">
          <div class="img">
            <img src="@/assets/img/details_img.png" alt="">
          </div>
        </div>
        <div class="col info">
          <div class="title">熊猫老师课程</div>
          <div class="row">
            <div class="label">价格</div>
            <div class="value cost"><span class="small">¥</span>20.0</div>
          </div>
          <div class="row">
            <div class="label">类型</div>
            <div class="value type">小组课</div>
          </div>
          <div class="row">
            <div class="label">数量</div>
            <div class="value number">
              <div class="button">-</div>
              <input type="text" value="1">
              <div class="button">+</div>
            </div>
          </div>
          <div class="row">
            <div class="label">已购</div>
            <div class="value shop">
              <img src="@/assets/img/details_img.png" alt="">
              <img src="@/assets/img/details_img.png" alt="">
              <img src="@/assets/img/details_img.png" alt="">
            </div>
          </div>
          <div class="row">
            <div class="value">2025-04-02  12：00：00  结束，已成团  /  2025-04-02  12：00：00  结束，还差n人成团</div>
          </div>
          <div class="row button-group">
            <div class="button">立即购买</div>
            <div class="button">转换</div>
          </div>
        </div>

      </div>
    </div>
    </div>
    <div class="bg-f mb30">
      <div class="recommend">
        <div class="title"><span>为你推荐</span></div>
        <div class="row">
          <div class="item">
            <img
                class="img"
              src="@/assets/img/details_img.png"
              alt="">
            <div class="desc">
              <div class="label">王老师</div>
              <div class="value">
                <span> ¥</span>
                20.0
              </div>
            </div>
          </div>
          <div class="item">
            <img
                class="img"
                src="@/assets/img/details_img.png"
                alt="">
            <div class="desc">
              <div class="label">王老师</div>
              <div class="value">
                <span> ¥</span>
                20.0
              </div>
            </div>
          </div>
          <div class="item">
            <img
                class="img"
                src="@/assets/img/details_img.png"
                alt="">
            <div class="desc">
              <div class="label">王老师</div>
              <div class="value">
                <span> ¥</span>
                20.0
              </div>
            </div>
          </div>
          <div class="item">
            <img
                class="img"
                src="@/assets/img/details_img.png"
                alt="">
            <div class="desc">
              <div class="label">王老师</div>
              <div class="value">
                <span> ¥</span>
                20.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-f mb30">
      <div class="recommend">
        <div class="title"><span>课程简介</span></div>
        <div class="content">
          <br/>
          奇怪的div
          <br/>
          <br/>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'
import List from '@/components/List/Teachers.vue';
import Page from '@/components/Pages/Page.vue';

const price = ref('')
const price2 = ref('')
const age = ref('')

</script>
<style lang="stylus" scoped>
.recommend
  .title
    border-bottom 1px solid #e6e6e8
    span
      display inline-block
      font-size 18px
      color #000000
      font-weight bold
      padding 20px 40px
      border-bottom 3px solid #bfa475
  .row
    padding 40px
    display flex
    gap 40px
    flex-wrap wrap
    .item
      width 265px
      .img
        width 100%
      .desc
        background #f4f9ff
        padding 0 20px
        height 76px
        display flex
        justify-content space-between
        font-size 16px
        color #000000
        align-items center
        .value
          font-size 30px
          color #ff5000
          span
            font-size 20px
            color #ff5000

.mb30
  margin-bottom 30px
.commodityDetails
  background #f8f9fb
  padding 28px 20px
.bg-f
  background #ffffff
  border-radius 10px
.tabs
  margin 36px 0
  span
    cursor pointer
    min-width 134px
    line-height 40px
    text-align center
    background-color #bfa475
    margin-right 26px
    border-radius 6px
    &:hover
      opacity 0.8
    &.acti
      background-color #0c3875
.header
  display flex
  .list-img
    flex none
    width 70px
    margin-right 30px
    .img
      width 70px
      height 70px
      margin-bottom 20px
      img
        width 100%
        height 100%
        border-radius 6px
  .big-img
    flex none
    width 420px
    margin-right 30px
    img
      width 100%
      height 100%
      border-radius 6px
  .info
    flex none
    .title
      font-size 20px
      color #333333
      font-weight bold
      padding-bottom 20px
    .row
      padding-bottom 20px
      display flex
      align-items center
      .value
      .label
        font-size 20px
        color #333333
        padding-right 20px
      .cost
        color #ff5000
        font-size 30px
        .small
          color #ff5000
          font-size 20px
      .type
        padding 15px 30px
        font-size 20px
        color #ff5000
        border-radius 5px
        border 1px solid #ff5000
      .number
        display flex
        align-items center
        justify-content center
        height 37px
        border-radius 5px
        border 1px solid #d1d1d1
        .button
        input
          width 35px
        .button
          text-align center
          font-size 30px
          color #000000
          height 100%
          display flex
          aign-items center
          justify-content center

        input
          border-left 1px solid #d1d1d1
          border-right 1px solid #d1d1d1
          height 100%
          text-align center
    .shop
      img
        width 55px
        height 55px
        border-radius 50%
        margin-right 35px
    .button-group
      display flex
      gap 20px
      .button
        width 200px
        height 70px
        line-height 70px
        text-align center
        background linear-gradient(90deg, #e98d44 0%, #d0600b 100%)
        color #ffffff
        border-radius 6px
        font-size 20px
        cursor pointer
        &:hover
          opacity 0.8
</style>
