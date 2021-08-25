<template>
  <section class="py-24" :class="{ 'bg-gray-100': gray }">
    <Container :class="{ 'flex flex-col items-center': center }">
      <slot />
    </Container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import Container from '@/components/shared/Container/Container.vue'

export default Vue.extend({
  components: {
    Container,
  },

  props: {
    gray: {
      type: Boolean,
    },
    center: {
      type: Boolean,
    },
  },
})
</script>
