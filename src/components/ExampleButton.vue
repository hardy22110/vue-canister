<template>
  <div class="hello">
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
  watch: {
    text (newValue: string) {
      console.log('watch text', newValue)
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
      console.log('this.count', this.count)
      /**
       * Click event
       * @event click
       */
      this.$emit('click')
    }
  }
})
</script>
