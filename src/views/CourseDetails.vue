<template>
  <div class="publicWrap bg2">
    <div class="topBox flex-box flex-pack-between flex-align-center w98">
      <strong class="font-18">李老师 精品课 2025-03-01 12：00 - 13：00</strong>
      <div class="right flex-box">
        <div class="openLink flex-box flex-wrap">
          <input type="text" class="input" placeholder="Zoom地址" />
          <div class="open bg02 font-16 color-white">打开</div>
        </div>
        <div class="close font-16">取消</div>
      </div>
    </div>
    <div class="introduce flex-box flex-pack-between flex-wrap w93">
      <div class="left ">
        <div class="pic">
          <img src="" alt="">
          <a href="#"></a>
          <div class="tip color-white font-16">15:30-17:30</div>
        </div>
        <div class="text flex-box flex-pack-between flex-align-center font-16">
          <p>刘老师 </p>
          <p>初一 物理 </p>
        </div>
      </div>
      <div class="right font-18 lh32 ">
        <b>课程介绍：</b>课程是一个发展的概念，它是由一定的育人目标、特定的知识经验和预期的学习活动方式构成的，蕴含着丰富、基本而又有创造性与潜质的一套计划与设定。从育人目标看，课程是一种培养人的蓝图；从课程内容看，课程是一种适合学生身心发展规律的、连接学生直接经验和间接经验的、引导学生个性全面发展的知识体系及其获取的途径。
        由于不同的教育主张对课程的理解是不同的，因此还没有一个关于课程概念的定论。学界最流行的有两种说法：（1）课程即教学科目这是最普遍的也是最常识化的课程定义，广义的课程指学生所学的全部学科以及在教师指导下的各种活动的总称。
      </div>
    </div>
    <div class="line w93">
      <div class="publicTitle font-18"><strong>老师点评</strong></div>
      <el-input v-model="textarea" style="width: 100%; font-size: 18px; background:#fafafa;" :rows="6" type="textarea"
        placeholder="老师课后点评" resize="none" />
    </div>
    <div class="line w93">
      <div class="publicTitle font-18"><strong>作业</strong></div>
      <div class="table">
        <table>
          <tbody>
            <tr>
              <td><b>作业一</b></td>
              <td>作业说明作业说明作业说明作业说明作业说明</td>
              <td>
                <div class="btn bg02">下载</div>
                <div class="btn bgbf">上传</div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><b>作业一</b></td>
              <td>作业说明作业说明作业说明作业说明作业说明</td>
              <td>
                <div class="btn bg02">下载</div>
                <div class="btn bgbf">上传</div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="line w93">
      <div class="publicTitle font-18"><strong>学生评价</strong></div>
      <el-input v-model="textarea" style="width: 100%; font-size: 18px;background:#fafafa;" :rows="6" type="textarea"
        placeholder="请输入您的评价" resize="none" />
    </div>
    <div class="submit font-22 color-white bg02 fwb">提 交</div>
    <div class="null"></div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'
const textarea = ref('')
const textarea2 = ref('')

</script>
<style lang="stylus" scoped>
.null
  height 1px
.submit
  border-radius 30px
  text-align center
  width 382px
  line-height 56px
  margin 60px auto
  cursor pointer
  &:hover
    opacity 0.8
.table
  overflow hidden
  table
    width 100%
    border-radius 6px
    border-collapse collapse
  tr
    &:nth-child(even)
      background-color #fafafa
    td
      width 12%
      border 1px solid #eaeaea
      padding 25px 30px
      line-height 1.3
      font-size 16px
      color #333
      height 92px
      vertical-align middle
      &:nth-child(2)
        width 43%
      &:nth-child(3)
        width 27%
      &:last-child
        width 18%
      .btn
        width 86px
        line-height 40px
        border-radius 30px
        text-align center
        color #fff
        font-size 16px
        display inline-block
        margin 0 16px
        cursor pointer
        &:hover
          opacity 0.8

.el-textarea
  margin-top 20px
  :deep(textarea)
    background-color #fafafa

.line
  margin-top 20px
.publicTitle
  strong
    position relative
    padding 20px
    display inline-block
    &:after
      content ''
      position absolute
      bottom 0
      left 0
      height 3px
      background-color #bfa475
      width 100%
      display block

.introduce
  padding-top 40px
  .right
    width calc(100% - 362px)
    background-color #fafafa
    padding 30px
    border-radius 4px
  .left
    width 336px
    height 290px
    border-radius 6px
    overflow hidden
    .pic
      position relative
      height 216px
      background url('@/assets/img/bg2.png') no-repeat center bottom
      background-size auto
      a
        position absolute
        z-index 1
        top 0
        left 0
        width 100%
        h1eight 100%
        background url('@/assets/img/play.png') rgba(#000,.5) no-repeat center center
        background-size auto
        display block
      .tip
        position absolute
        bottom 0
        right 0
        line-height 34px
        padding 0 20px
        background rgba(#000,.5)
    .text
      height 74px
      background #f5f9fe
      padding 0 40px
    

.topBox
  border-bottom 1px solid #e6e6e8
  padding 25px 35px
  .openLink
    border 1px solid #d1d1d1
    border-radius 4px
    line-height 34px
    input
      font-size 18px
      color #000
      height 100%
      padding-left 20px
      width calc(100% - 78px)
    .open
      width 78px
      height 100%
      text-align center
      cursor pointer
  .close
    width 84px
    height 34px
    border 1px solid #e6e6e8
    border-radius 4px
    text-align center
    line-height 34px
    margin-left 40px
    cursor pointer
</style>