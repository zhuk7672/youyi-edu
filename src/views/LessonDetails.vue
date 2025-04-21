<template>
  <div class="publicWrap bg2 h872">
    <div class="publicTitle">李老师：精品课</div>
    <div class="lessonDetai w93">
      <h2 class="font-18 color-33 lh12">使用明细</h2>
      <div class="from font-18 color-33 lh12 flex-box flex-wrap ">
        <div class="row flex-box flex-align-center">
          <div class="block"><b>时间</b></div>
          <div class="block"><b>数量</b></div>
          <div class="block"><b>详细说明</b></div>
        </div>
        <div class="row flex-box flex-align-center">
          <div class="block">2023.12.31 12:31</div>
          <div class="block">+1</div>
          <div class="block">上课使用</div>
        </div>
        <div class="row flex-box flex-align-center">
          <div class="block">2023.12.31 12:31</div>
          <div class="block">+1</div>
          <div class="block">上课使用</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'


</script>
<style lang="stylus" scoped>
.h872
  min-height 872px
.lessonDetai
  padding-top 40px
  h2
    font-weight normal
    margin-bottom 26px
  .from
    .row
      width 100%
      height 100px
      border-bottom 1px solid #e6e6e8
      &:first-child
        background-color #f5f9fe
        border-bottom none
      .block
        padding-left 100px
        flex 1 1 0
</style>