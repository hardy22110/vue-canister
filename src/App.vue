<template>
  <div id="app">
    <ExampleButton :text="'點我'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ExampleButton from './components/ExampleButton.vue'

export default defineComponent({
  name: 'App',
  components: {
    ExampleButton
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
