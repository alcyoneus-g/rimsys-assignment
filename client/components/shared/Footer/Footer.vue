<template>
  <Container>
    <footer
      class="
      border-t border-gray-300
      w-full
    "
    >
      <ul class="flex items-center space-x-5 py-2">
        <li class="mr-auto font-semibold">© 2021 John Doe</li>
        <li v-for="item in items" :key="item.label">
          <a
            :href="item.to"
            target="_blank"
            class="
            py-1
            block
            text-gray-800
            font-medium
          "
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </footer>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'

import Container from '@/components/shared/Container/Container.vue'

export default Vue.extend({
  components: {
    Container,
  },

  data () {
    return {
      items: [
        {
          label: 'Privacy',
          to: '#',
        },
      ],
    }
  },
})
</script>
