<template>
  <div class="selectRight flex-box flex-align-center font-16 flex-pack-end">
    <div class="row flex-box flex-align-center">
      <span>科目：</span>
      <el-select v-model="subject" placeholder="" size="large" style="width: 94px">
        <el-option v-for="item in subjects" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <div class="gap"></div>
      <span>时间：</span>
      <el-date-picker v-model="value1" type="date" placeholder="" :size="size" style="width: 154px" />
    </div>
  </div>
  <div class="w93">
    <List></List>
    <Page></Page>

  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'
import List from '@/components/List/Teachers.vue';
import Page from '@/components/Pages/Page.vue';

const subject = ref('')
const subjects = [
  {
    value: '语文',
    label: '语文',
  },
  {
    value: '数学',
    label: '数学',
  },
  {
    value: '英语',
    label: '英语',
  },
 
]
const value1 = ref('')
const size = ref<'default' | 'large' | 'small'>('default')
</script>
<style lang="stylus" scoped>
.gap
  width 35px

.selectRight
  width 98%
  height 88px
  margin 0 auto 36px
  border-bottom 1px solid #e6e6e8
  .row
    margin-right 38px
</style>