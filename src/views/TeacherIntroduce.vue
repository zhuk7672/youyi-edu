<template>
  <div class="teachers">
    <div class="top">老师介绍</div>
    <div class="selectRight flex-box flex-align-center font-16 flex-pack-end">
      <div class="row flex-box flex-align-center">
        <span>价格区间：</span>
        <el-input v-model="price" style="width: 74px" />
        <div class="gap"></div>
        <el-input v-model="price2" style="width: 74px" />
      </div>
      <div class="row">
        <span>年龄段：</span>
        <el-select placeholder="" v-model="age" size="large" style="width: 94px">
          <el-option v-for="item in Ages" :key="item.value" :label="item.value" :value="item.value" />
        </el-select>
      </div>
      <div class="row">
        <span>学校：</span>
        <el-select placeholder="" v-model="age" size="large" style="width: 94px">
          <el-option v-for="item in Ages" :key="item.value" :label="item.value" :value="item.value" />
        </el-select>
      </div>
      <div class="row">
        <span>科目：</span>
        <el-select placeholder="" v-model="age" size="large" style="width: 94px">
          <el-option v-for="item in Ages" :key="item.value" :label="item.value" :value="item.value" />
        </el-select>
      </div>
    </div>
    <div class="w93">
      <div class="tabs flex-box">
        <span class="acti font-16 color-white">一对一</span>
        <span class=" font-16 color-white">小班课</span>
      </div>
      <List></List>
      <Page></Page>
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

const Ages = [
  {
    value: '',
    label: 'Option0',
  },
  {
    value: '10',
    label: 'Option1',
  },
  {
    value: '10',
    label: 'Option2',
  },
  {
    value: '10',
    label: 'Option3',
  },
  {
    value: '10',
    label: 'Option4',
  },
  {
    value: '10',
    label: 'Option5',
  },
]
</script>
<style lang="stylus" scoped>

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
.gap
  width 20px
  &.g2
    width 38px
.selectRight
  width 98%
  height 88px
  margin 0 auto
  border-bottom 1px solid #e6e6e8
  .row
    margin-right 38px
.clear
  height 1px
.teachers
  position relative
  width 98%
  min-height 832px
  margin 78px auto 
  border-radius 0 10px 10px 10px
  background-color #fff
  .top
    position absolute
    top -64px
    left 0
    width 132px
    height 64px
    background-color #fff
    border-radius 5px 5px 0 0
    text-align center
    line-height 64px
    font-size 18px
    color #0c3875
    border-top 2px solid #0c3875
</style>