<template>
  <div class="content flex-box flex-pack-end">
    <el-pagination background layout="prev, pager, next" :total="70" />
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'


</script>
<style lang="stylus" scoped>
.content
  text-align center
  margin 40px 0
.el-pagination
 :deep(ul li),:deep(button)
    background-color #f5f5f5 !important
    color #0e0e0e
    width 62px
    height 62px
    font-size 16px
    border-radius 10px
    margin 0 6px
    &.is-active,&:hover
      background-color #0c3875 !important
      color #fff


</style>