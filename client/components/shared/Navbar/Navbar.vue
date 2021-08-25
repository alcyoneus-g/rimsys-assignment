<template>
  <nav
    class="
      sticky
      top-0
      border-b border-gray-300
      backdrop-filter backdrop-blur-3xl
      w-full
      z-10
    "
  >
    <Container>
      <ul class="container mx-auto flex items-center space-x-5 py-2">
        <li class="mr-auto font-bold">{{ $store.getters.name }}</li>
        <li v-for="item in items" :key="item.label">
          <a
            :href="item.to"
            class="
            py-1
            block
            text-gray-800
            font-medium
            border-b border-transparent
            transition-all
            hover:border-gray-400
          "
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </Container>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

import Container from '@/components/shared/Container/Container.vue'

export default Vue.extend({
  components: {
    Container,
  },

  data() {
    return {
      items: [
        {
          label: 'Skills',
          to: '#skills',
        },
        {
          label: 'How can I help you?',
          to: '#how-can-i-help-you',
        },
        {
          label: 'Projects',
          to: '#projects',
        },
        {
          label: 'Contact',
          to: '#contact',
        },
      ],
    }
  },
})
</script>
