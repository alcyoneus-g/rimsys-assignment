<template>
  <Section id="projects">
    <Title
      class="mb-16"
      title="Pojects"
      subtitle="A small selected section of my projects"
    />
    <div class="grid grid-cols-2 gap-16 max-w-6xl m-auto">
      <a
        v-for="(project, i) in $store.getters.projects"
        :key="i"
        :href="project.to"
        class="overflow-hidden rounded-lg transition-all shadow-none transform scale-100 hover:shadow-xl hover:scale-110"
        target="_blank"
      >
        <img :src="project.src" class="w-full h-full object-cover" alt="">
      </a>
    </div>
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
