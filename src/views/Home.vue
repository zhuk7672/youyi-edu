<template>
  <Header></Header>
  <div class="container flex-box flex-pack-bwteen">
    <Sidebar></Sidebar>
    <div class="wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,} from 'vue'
import Header from '@/components/Header/HeaderCon.vue'
import Sidebar from '@/components/Sidebar/sidebarCon.vue'

</script>
<style lang="stylus" scoped>
.wrap
  width calc(100vw - 267px)
  background-color #f8f9fb
</style>