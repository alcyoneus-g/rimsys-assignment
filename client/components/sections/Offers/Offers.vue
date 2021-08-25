<template>
  <Section id="how-can-i-help-you" gray>
    <Title class="mb-16" title="How can I help you?" />
    <div class="grid grid-cols-3 cards-wrapper gap-5 max-w-6xl m-auto">
      <Card
        v-for="(offer, i) in $store.getters.offers"
        :key="i"
        :class="{
          [`col-span-${offer.colSpan}`]: offer.colSpan,
          [`row-span-${offer.rowSpan}`]: offer.rowSpan,
        }"
      >
        <p class="text-2xl font-semibold">
          {{ offer.title }}
          <span class="text-gray-600">{{ offer.secondaryTitle }}</span>
        </p>
        <p v-if="offer.text" class="mt-5">
          {{ offer.text }}
        </p>
      </Card>
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

import Title from '@/components/shared/Title/Title.vue'
import Card from '@/components/shared/Card/Card.vue'
import Section from '@/components/shared/Section/Section.vue'

export default Vue.extend({
  components: {
    Title,
    Card,
    Section,
  },
})
</script>

<style scoped>
.cards-wrapper {
  grid-template-rows: repeat(5, auto);
}
</style>
