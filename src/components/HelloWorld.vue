<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      default: '',
      type: String
    }
  }
})
</script>
