<template>
  <Section id="skills">
    <Title
      class="mb-5"
      title="Skills"
      subtitle="Once You Stop Learning, You Start Dying -  Albert Einstein"
    />
    <p class="text-center mx-auto text-lg max-w-5xl mb-16">
      Here is a list of my skills. of course there are no calculation or magic
      tool that tell me how much I know, but I'll try! I'm certain about this
      though: The more I learn, The less I realize I know!
    </p>
    <SkillSet class="max-w-6xl mx-auto" />
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

import Title from '@/components/shared/Title/Title.vue'
import SkillSet from '@/components/shared/SkillSet/SkillSet.vue'
import Section from '@/components/shared/Section/Section.vue'

export default Vue.extend({
  components: {
    Title,
    SkillSet,
    Section,
  },
})
</script>
