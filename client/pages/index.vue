<template>
  <main>
    <Navbar />
    <Hero />
    <Bio />
    <Skills />
    <Offers />
    <Projects />
    <Contact />
    <Footer />
    <UpdateInfo />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import Navbar from '@/components/shared/Navbar/Navbar.vue'
import Footer from '@/components/shared/Footer/Footer.vue'
import UpdateInfo from '@/components/shared/UpdateInfo/UpdateInfo.vue'

import Hero from '@/components/sections/Hero/Hero.vue'
import Bio from '@/components/sections/Bio/Bio.vue'
import Skills from '@/components/sections/Skills/Skills.vue'
import Offers from '@/components/sections/Offers/Offers.vue'
import Projects from '@/components/sections/Projects/Projects.vue'
import Contact from '@/components/sections/Contact/Contact.vue'

export default Vue.extend({
  components: {
    Navbar,
    Hero,
    Bio,
    Skills,
    Offers,
    Projects,
    Contact,
    Footer,
    UpdateInfo
  },

  data() {
    return {}
  },

  async mounted () {
    try {
      await this.$store.dispatch('getSkills')
      await this.$store.dispatch('getProjects')
    } catch (e) {
      console.log(e)
      this.$toast.show({
        type: 'danger',
        title: 'Error',
        message: 'There was an error while fetching data',
      })
    }
  },

  methods: {},
})
</script>
