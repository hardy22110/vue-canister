<template>
  <div id="app">
    <button @click="showA = !showA">
      點我A
    </button>
    <button @click="showB = !showB">
      點我B
    </button>
    <MovingWindow
      v-model="showA"
      :wrap-min-height="'400px'"
      :wrap-min-width="'400px'"
    >
      <template #shrinkButton>
        <span>-</span>
      </template>
      <template #zoomButton>
        <span>□</span>
      </template>
      <!-- <template #closeButton>
        <span>Xx</span>
      </template> -->
      <template #title>
        <div style="padding: 10px; overflow-x: hidden; text-overflow: ellipsis;">
          詳細交談內容測試-1687932321575123123123 進線
        </div>
      </template>
      <template #body>
        <div style="padding: 10px; height: 100%; box-sizing: border-box;">
          <div style="overflow: auto; background-color: aquamarine; height: 100%;">
            <div
              v-for="i in 1"
              :key="i"
            >
              content
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div style="padding: 10px">
          footer
        </div>
      </template>
    </MovingWindow>
    <MovingWindow v-model="showB" />
    <ExampleButton />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExampleButton from './components/ExampleButton.vue'
import MovingWindow from './components/MovingWindow.vue'

export default Vue.extend({
  name: 'App',
  components: {
    ExampleButton,
    MovingWindow
  },
  data() {
    return {
      showA: false,
      showB: false
    }
  }
})
</script>

<style lang="scss">
#app {
  text-align: center;
  width: 100vw;
  height: 100vh;
}
</style>
