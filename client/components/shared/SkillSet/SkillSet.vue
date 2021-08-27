<template>
  <ul class="flex flex-col space-y-5">
    <li
      v-for="item in $store.getters.skills"
      :key="item.label"
      class="flex items-center"
    >
      <span
        :ref="`skillLabel-${item.id}`"
        class="block w-36 p-1 mr-2 border-b border-transparent"
        :class="{
          'border-b border-solid border-gray-500 focus:outline-none':
            isEditing && item.id === editingId,
        }"
        :contenteditable="isEditing && item.id === editingId"
      >{{ item.label }}</span>
      <div class="w-full block bg-gray-200 overflow-hidden h-3 rounded-lg">
        <div
          class="bg-gray-700 h-full rounded-lg"
          :style="{ width: `${item.value}%` }"
        />
      </div>
      <span
        :ref="`skillValue-${item.id}`"
        class="block w-20 text-right p-1 pr-0 ml-2"
        :contenteditable="isEditing && item.id === editingId"
        :class="{
          'border-b border-solid border-gray-500 focus:outline-none':
            isEditing && item.id === editingId,
        }"
      >{{ item.value }}</span>%
      <div v-if="editable" class="ml-4 space-x-1 flex items-center">
        <button
          class="bg-red-500 text-white px-2 p-1 text-xs rounded-md"
          @click="deleteSkill(item.id)"
        >
          Delete
        </button>
        <button
          class="bg-blue-500 text-white px-2 p-1 text-xs rounded-md"
          @click="
            isEditing && item.id === editingId
              ? finishEdit(item.id)
              : startEdit(item.id)
          "
        >
          {{ isEditing && item.id === editingId ? 'Save' : 'Edit' }}
        </button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    editable: {
      type: Boolean,
    },
  },

  data () {
    return {
      isEditing: false,
      editingId: 0,
    }
  },

  methods: {
    startEdit (id: number) {
      this.isEditing = true
      this.editingId = id
    },

    async finishEdit (id: number) {
      const skillLabels = this.$refs[`skillLabel-${id}`] as HTMLSpanElement[]
      const skillValues = this.$refs[`skillValue-${id}`] as HTMLSpanElement[]

      let label = ''
      let value = ''
      if (skillLabels && skillLabels.length > 0)
        label = skillLabels[0].innerText
      if (skillValues && skillValues.length > 0)
        value = skillValues[0].innerText

      if (label.length === 0 || value.length === 0) return

      try {
        await this.$store.dispatch('updateSkill', {
          id,
          label,
          value: parseInt(value, 10),
        })

        this.isEditing = false
        this.editingId = 0
      } catch (e) {
        console.log(e)
        this.$toast.show({
          type: 'danger',
          title: 'Error',
          message: 'There was an error while editing skill',
        })
      }
    },

    async deleteSkill (id: number) {
      try {
        await this.$store.dispatch('deleteSkill', id)
      } catch (e) {
        console.log(e)
        this.$toast.show({
          type: 'danger',
          title: 'Error',
          message: 'There was an error while deleting skill',
        })
      }
    },
  },
})
</script>
