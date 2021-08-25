<template>
  <Section center>
    <Avatar class="mb-14" />
    <p class="text-4xl font-semibold mb-5">{{ $store.getters.name }}</p>
    <h1 class="text-7xl font-bold capitalize mb-5">
      {{ $store.getters.position }}
    </h1>
    <p class="text-2xl max-w-2xl text-center mb-14">
      {{ $store.getters.hero.intro }}
    </p>
    <a
      href="#bio"
      class="text-blue-500 text-2xl flex items-center"
      >Let me introduce myself
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        /></svg
    ></a>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

import Avatar from '@/components/shared/Avatar/Avatar.vue'
import Section from '@/components/shared/Section/Section.vue'

export default Vue.extend({
  components: {
    Avatar,
    Section,
  },
})
</script>
