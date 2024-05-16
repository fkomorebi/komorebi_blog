<template>
  <client-only>
    <el-button type="primary" @click="onTabBtnClk" class="tabBtn el-backtop"
    >曲谱
    </el-button
    >
    <el-drawer
      v-model="drawer"
      :with-header="false"
      direction="rtl"
      size="250px"
      class="drawer"
    >
      <div class="localTabBtn">
        <el-upload
          :auto-upload="false"
          :on-change="onSelectFile"
          accept=".gp3,.gp4,.gp5,.gpx,.gp,.xml,.cap"
          :show-file-list="false"
        >
          <el-button type="primary">本地打开</el-button>
        </el-upload>
        <br/>
        <div class="dashed"></div>
      </div>
    </el-drawer>
    <MusicTab v-if="fileRef" :file="fileRef"/>
  </client-only>
</template>
<script setup>
import {ref} from 'vue'
import MusicTab from './GuitarTab.vue'

const fileRef = ref(null)
const drawer = ref(false)

function onTabBtnClk() {
  drawer.value = true
}

function onSelectFile(file) {
  if (file == null || file.raw == null) {
    console.error('file is null!')
    return
  }
  navigator.mediaDevices.getUserMedia({audio: true})
  let reader = new FileReader()
  reader.onloadend = function () {
    fileRef.value = this.result
    drawer.value = false
  }
  reader.readAsArrayBuffer(file.raw)
}
</script>
<style scoped>
.affix {
  background-color: white;
  width: auto;
  height: 45px;
  bottom: 0;
}

.tab-wrap {
  min-height: 100%;
}

.tabBtn {
  font-size: medium;
  bottom: 120px;
  right: 40px;
}

.localTabBtn {
}

.dashed {
  border-top: 2px dashed var(--el-border-color);
}
</style>
