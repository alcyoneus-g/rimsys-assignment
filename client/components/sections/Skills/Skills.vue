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

    <SkillSet class="max-w-6xl mx-auto" :editable="isEditable" />

    <div v-if="!isEditable" class="w-full flex justify-center mt-10">
      <button
        class="bg-blue-500 text-white py-1 px-3 rounded-md"
        @click="isEditable = true"
      >
        Start Editing
      </button>
    </div>

    <div v-if="isEditable" class="flex space-x-4 mt-10 justify-center">
      <input
        v-model="skillLabel"
        type="text"
        class="border-b border-solid focus:outline-none border-gray-400 px-2 py-1 w-40"
        placeholder="Skill name"
      >
      <input
        v-model="skillValue"
        type="number"
        class="border-b border-solid focus:outline-none border-gray-400 px-2 py-1 w-40"
        placeholder="Value in precent"
        max="100"
      >
      <button
        class="bg-green-500 text-white px-3 rounded-md"
        @click="addSkill()"
      >
        Add Skill
      </button>
    </div>
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

  data () {
    return {
      isEditable: false,
      skillLabel: '',
      skillValue: 0,
    }
  },

  methods: {
    async addSkill () {
      if (this.skillLabel.length === 0) return

      try {
        if (this.skillValue > 100) this.skillValue = 100

        await this.$store.dispatch('addSkill', {
          label: this.skillLabel,
          value: this.skillValue || 0,
        })

        this.skillLabel = ''
        this.skillValue = 0
      } catch (e) {
        console.log(e)
        this.$toast.show({
          type: 'danger',
          title: 'Error',
          message: 'There was an error while adding new skill',
        })
      }
    },
  },
})
</script>
