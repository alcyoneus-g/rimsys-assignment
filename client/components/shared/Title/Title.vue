<template>
  <div class="flex flex-col items-center">
    <h2 class="text-5xl font-semibold capitalize">{{ title }}</h2>
    <h3 class="mt-5 text-2xl" v-if="subtitle">{{ subtitle }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
});
</script>
