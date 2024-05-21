<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{imageUrl:string, title:string}>()
</script>

<template>
  <div class="item-wrap">
    <el-image :src="imageUrl" class="image"/>
    <div>{{title}}</div>
  </div>
</template>

<style scoped>
.item-wrap {
  display: flex;
  align-items: center;
  gap: 5px;
}
.image {
  height: 50px;
  width: 50px;
  flex-shrink: 0;
}
</style>
