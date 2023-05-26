<template>
  <div class="example-button">
    <button @click="clickButton">{{ text }}</button>
    count: {{ renderCount }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

/**
 * the example button component
 * @displayName ExampleButton
 * @since v0.0.0
 */
export default defineComponent({
  name: 'ExampleButton',
  props: {
    /**
     * show button text
     */
    text: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      count: 0
    }
  },
  computed: {
    renderCount: {
      get (): number {
        return this.count
      },
      set () {
        this.count++
      }
    }
  },
  methods: {
    /**
     * Click Button
     * @public
     */
    clickButton () {
      this.renderCount++
      /**
       * Click event
       * @event click
       */
      this.$emit('click')
    }
  }
})
</script>

<style lang="scss">
.example-button {
  button {
    border: 1px solid lightskyblue;
    cursor: pointer;
    padding: 4px 12px;
    border-radius: 4px;
    background-color: transparent;
  }
  button:active{
    background-color: aliceblue;
  }
}
</style>
