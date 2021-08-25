<template>
  <Section id="bio" gray>
    <Title class="mb-10" title="Who Am I?" />
    <p class="text-lg">
      {{ $store.getters.bio }}
    </p>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

import Title from '@/components/shared/Title/Title.vue'
import Section from '@/components/shared/Section/Section.vue'

export default Vue.extend({
  components: {
    Title,
    Section,
  },
})
</script>
