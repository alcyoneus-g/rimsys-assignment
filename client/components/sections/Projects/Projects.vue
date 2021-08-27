<template>
  <Section id="projects">
    <Title
      class="mb-16"
      title="Pojects"
      subtitle="A small selected section of my projects"
    />
    <div class="grid grid-cols-2 gap-16 max-w-6xl m-auto">
      <a
        v-for="(project, i) in projects"
        :key="i"
        :href="project.to"
        class="
          project-card
          group
          overflow-hidden
          rounded-lg
          transition-all
          shadow-none
          transform
          scale-100
          hover:shadow-xl
          hover:scale-110
          relative
          cursor-auto
        "
        @click="openLink"
      >
        <img :src="project.src" class="w-full h-full object-cover" alt="">

        <div
          class="
            opacity-0
            transition-all
            group-hover:opacity-100 group-hover:pointer-events-auto
            flex flex-col
            justify-center
            items-center
            bg-black bg-opacity-50
            w-full
            h-full
            absolute
            top-0
            left-0
            text-white
          "
        >
          <input
            v-model="project.to"
            type="text"
            class="
              rounded-md
              w-3/4
              focus:outline-none
              px-2
              py-1
              bg-white bg-opacity-25
              text-white
              placeholder-white
              mb-2
            "
            placeholder="Link address"
          >
          <input
            v-model="project.src"
            type="text"
            class="
              rounded-md
              w-3/4
              focus:outline-none
              px-2
              py-1
              bg-white bg-opacity-25
              text-white
              placeholder-white
            "
            placeholder="Cover address"
          >
          <div class="flex items-center">
            <button
              class="text-red-500 font-semibold px-3 py-1 mt-5"
              @click="deleteProject(project.id)"
            >
              Delete
            </button>
            <button
              class="text-white px-3 py-1 mt-5"
              @click="updateProject(project.id)"
            >
              Update info
            </button>
          </div>
        </div>
      </a>
    </div>

    <div class="flex space-x-4 justify-center mt-32">
      <input
        v-model="linkSrc"
        type="text"
        class="
          border-b border-solid
          focus:outline-none
          border-gray-400
          px-2
          py-1
        "
        placeholder="Link address"
      >
      <input
        v-model="coverSrc"
        type="text"
        class="
          border-b border-solid
          focus:outline-none
          border-gray-400
          px-2
          py-1
        "
        placeholder="Cover address"
        max="100"
      >
      <button
        class="bg-green-500 text-white px-3 rounded-md"
        @click="addProject()"
      >
        Add Project
      </button>
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'

import Title from '@/components/shared/Title/Title.vue'
import Section from '@/components/shared/Section/Section.vue'

interface Project {
  id: number
  src: string
  to: string
  created_at?: string
  updated_at?: string
}

export default Vue.extend({
  components: {
    Title,
    Section,
  },

  data () {
    const projects: Project[] = []

    return {
      projects,
      linkSrc: '',
      coverSrc: '',
    }
  },

  computed: {
    storeProjects () {
      return this.$store.state.projects
    },
  },

  watch: {
    storeProjects: {
      handler (v) {
        const clone = JSON.parse(JSON.stringify(v))
        this.projects = clone
      },
      deep: true,
    },
  },

  methods: {
    openLink (e) {
      e.preventDefault()
    },

    async deleteProject (id: number) {
      try {
        await this.$store.dispatch('deleteProject', id)
      } catch (e) {
        console.log(e)
        this.$toast.show({
          type: 'danger',
          title: 'Error',
          message: 'There was an error while deleting project',
        })
      }
    },

    async addProject () {
      if (this.coverSrc.length === 0 || this.linkSrc.length === 0) return

      try {
        await this.$store.dispatch('addProject', {
          src: this.coverSrc,
          to: this.linkSrc,
        })

        this.coverSrc = ''
        this.linkSrc = ''
      } catch (e) {
        console.log(e)
        this.$toast.show({
          type: 'danger',
          title: 'Error',
          message: 'There was an error while adding new project',
        })
      }
    },

    async updateProject (id: number) {
      const targetIndex = this.projects.findIndex(
        project => project.id === id,
      )

      if (targetIndex !== -1)
        try {
          await this.$store.dispatch('updateProject', {
            id,
            src: this.projects[targetIndex].src,
            to: this.projects[targetIndex].to,
          })
        } catch (e) {
          console.log(e)
          this.$toast.show({
            type: 'danger',
            title: 'Error',
            message: 'There was an error while updaing project',
          })
        }
    },
  },
})
</script>
