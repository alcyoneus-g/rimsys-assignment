<template>
  <Section id="contact" center>
    <Card dark center class="w-full max-w-5xl p-14">
      <h3 class="text-5xl font-semibold mb-10">
        Intrested in working together? 😀
      </h3>
      <a
        :href="$store.getters.mail"
        class="text-2xl flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        Click here to contact me.</a>
    </Card>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

import Card from '@/components/shared/Card/Card.vue'
import Section from '@/components/shared/Section/Section.vue'

export default Vue.extend({
  components: {
    Card,
    Section,
  },
})
</script>
