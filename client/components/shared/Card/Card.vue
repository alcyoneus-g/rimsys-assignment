<template>
  <div
    class="bg-white p-8 rounded-lg shadow-lg"
    :class="{ 'bg-gray-800 text-white': dark, 'text-center': center }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    dark: {
      type: Boolean,
    },
    center: {
      type: Boolean,
    },
  },
})
</script>
