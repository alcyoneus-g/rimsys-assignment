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
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import Navbar from '@/components/shared/Navbar/Navbar.vue'
import Footer from '@/components/shared/Footer/Footer.vue'

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
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
})
</script>
