<template>
  <client-only>
    <el-button type="primary" @click="onTabBtnClk" class="tabBtn el-backtop"
    >曲谱
    </el-button
    >
    <el-dialog
        v-model="dialog"
      title="选择曲谱"
      center
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

        <div class="score-list" style="overflow: auto">
            <div class="score-wrap" v-for="(item, index) in MusicScoreData" :key="index">
              <MusicScore :title="item.title" :imageUrl="item.cover" @click="onMusicScoreClick(item.value)"/>
            </div>
        </div>
      </div>
    </el-dialog>
    <MusicTab v-if="fileRef" :file="fileRef"/>
  </client-only>
</template>
<script setup>
import {ref} from 'vue'
import MusicTab from './GuitarTab.vue'
import MusicScore from "./MusicScore.vue";
import MusicScoreData from "../utils/MusicSocre"

const fileRef = ref(null)
const dialog  = ref(true)

function onTabBtnClk() {
  dialog .value = true
}

const onSelectFile = (file) => {
 if(typeof file === "string") {
    fileRef.value = file
   dialog.value = false
    return
  }
  if (file == null || file.raw == null) {
    console.error('file is null!')
    return
  }
  navigator.mediaDevices.getUserMedia({audio: true})
  let reader = new FileReader()
  reader.onloadend = function () {
    fileRef.value = this.result
    dialog .value = false
  }
  reader.readAsArrayBuffer(file.raw)
}
const onMusicScoreClick = (value) => {
  console.log(value)
  onSelectFile(value)
}
</script>
<style scoped>
.affix {
  background-color: white;
  width: auto;
  height: 45px;
  bottom: 0;
}
.score-list{
  display: flex;
  max-height: 500px;
  flex-wrap: wrap;
  gap: 5px;
}
.tab-wrap {
  min-height: 100%;
}
.score-wrap {
  margin-bottom: 5px;
  background-color: rgba(30, 31, 34,0.3);
  padding: 3px;
  border-radius: 3px;
  overflow: hidden;
  width: 300px;
  flex-shrink: 0;
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
  margin-bottom: 3px;
}
</style>
