<template>
  <div ref="tabWrap" class="tab-wrap">
    <div id="viewPort" ref="viewPort">
      <div id="alphaTab" ref="guitarTab"></div>
    </div>
    <div v-if="isLoaded" class="tabbar-main">
      <div class="tabbar">
        <el-dropdown @command="onCommand">
          <el-button text>x{{ currentSpeed }}</el-button>
          <template #dropdown>
            <template v-for="item in slowSpeed" :key="item">
              <el-dropdown-item :command="item">x {{ item }}</el-dropdown-item>
            </template>
            <div class="dashed"></div>
            <el-dropdown-item command="1">x 1</el-dropdown-item>
            <div class="dashed"></div>
            <template v-for="item in quickSpeed" :key="item">
              <el-dropdown-item :command="item">x {{ item }}</el-dropdown-item>
            </template>
          </template>
        </el-dropdown>
        <el-button @click="onPlayPause" link>
          <el-icon v-if="!isPlaying">
            <VideoPlay/>
          </el-icon>
          <el-icon v-else>
            <VideoPause/>
          </el-icon>
        </el-button>
        <el-button @click="onPrintTab" link>
          <el-icon>
            <Printer/>
          </el-icon>
        </el-button>
        <el-button @click="onScreenFull" link>
          <el-icon>
            <FullScreen/>
          </el-icon>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, watchEffect, nextTick } from 'vue'
import { useFullscreen } from '@vueuse/core'
import { AlphaTabApi, Settings } from '@coderline/alphatab'

const slowSpeed = ref([0.25, 0.5, 0.6, 0.7, 0.8, 0.9])
const quickSpeed = ref([1.25, 1.5, 2])

const isPlaying = ref(false)
const isLoaded = ref(false)
const tabWrap = ref(null)
const guitarTab = ref(null)
const viewPort = ref(null)
const props = defineProps({
  file: {
    type: ArrayBuffer,
    require: true,
  },
})
const currentSpeed = ref(1)
let api

watchEffect(() => {
  if (props.file) {
    if (api == null) {
      nextTick(async ()=>{
        await initAlphaTab()
        api.load(props.file)
      })
    } else {
      api.load(props.file)
    }
  }
})

const {isFullscreen, enter, exit} = useFullscreen()

function onScreenFull() {
  console.log(isFullscreen.value)
  if (isFullscreen.value) {
    exit()
  } else {
    enter()
  }
}

function onCommand(command) {
  currentSpeed.value = api.playbackSpeed = command
}

function onPlayPause() {
  api?.playPause()
  if (api.playerState === 0) {
    isPlaying.value = true
  } else {
    isPlaying.value = false
  }
}

function onPrintTab() {
  api?.print()
}

onBeforeUnmount(() => {
  api?.destroy()
  api = null
})

async function initAlphaTab() {
  const settings = new Settings()
  settings.core.engine = 'svg'
  settings.core.logLevel = 4
  settings.core.useWorkers = true
  settings.core.fontDirectory = '/font/'
  settings.player.enablePlayer = true
  settings.player.enableCursor = true
  settings.player.enableUserInteraction = true
  settings.player.soundFont = '/soundfont/sonivox.sf2'
  settings.player.scrollOffsetY = -100
  api = new AlphaTabApi(guitarTab.value, settings);
  api.scoreLoaded.on(() => {
    isLoaded.value = true
  })
}
</script>
<style scoped>
.dashed {
  border-top: 1px dashed var(--el-border-color);
}

.tabbar-main {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;
}

.tabbar {
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #f8f8f8;
  margin: auto;
  text-align: center;
  align-items: center;
  pointer-events: auto;
}

.tab-wrap {
  background: #fff;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
