import type { Context } from '@nuxt/types'
import type { GetterTree, ActionTree, MutationTree } from 'vuex'

interface Hero {
  position: string;
  avatar: string;
  intro: string;
}

type Skills = {
  label: string;
  value: number;
}[]

type Offers = {
  title?: string;
  secondaryTitle?: string;
  text?: string
  colSpan?: number;
  rowSpan?: number;
}[]

type Projects = {
  src: string;
  to: string;
}[]

export interface RootState {
  name: string;
  mail: string;
  hero: Hero,
  bio: string,
  skills: Skills,
  offers: Offers
  projects: Projects
}

export const state = (): RootState => ({
  name: 'John Doe',
  mail: 'test@test.com',
  hero: {
    position: 'Full Stack Web Developer',
    avatar: 'https://unsplash.it/290/335',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus omnis ea ex error reiciendis',
  },
  bio: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, rerum cum.
  Reiciendis, incidunt. Fugit, sequi explicabo dolore adipisci aspernatur,
  ducimus nesciunt, accusantium rerum maxime consectetur suscipit iusto
  voluptate at quaerat? Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Quo, rerum cum. Reiciendis, incidunt. Fugit, sequi explicabo dolore
  adipisci aspernatur, ducimus nesciunt, accusantium rerum maxime
  consectetur suscipit iusto voluptate at quaerat? Lorem ipsum dolor sit,
  amet consectetur adipisicing elit. Quo, rerum cum. Reiciendis, into
  voluptate at quaerat?`,
  skills: [
    {
      label: 'HTML',
      value: 50,
    },
    {
      label: 'CSS',
      value: 85,
    },
    {
      label: 'JavaScript',
      value: 10,
    },
    {
      label: 'Web Desgin',
      value: 25,
    },
    {
      label: 'PHP',
      value: 65,
    },
    {
      label: 'NodeJS',
      value: 100,
    },
  ],
  offers: [
    {
      title: 'This is a title',
      secondaryTitle: 'in the card that is a bit long',
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nam?
      Eveniet a ducimus nam dolorem harum. Aliquid, distinctio. Molestiae
      debitis aliquam laudantium atque pariatur numquam sunt in earum
      placeat architecto.`,
    },
    {
      title: 'This is a title that is normal',
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nam?
      Eveniet a ducimus nam dolorem harum. Aliquid, distinctio. Molestiae
      debitis aliquam laudantium atque pariatur numquam sunt in earum
      placeat architecto.`,
      colSpan: 2,
      rowSpan: 2,
    },
    {
      title: 'This is a title',
      secondaryTitle: 'in the card that is a bit long',
    },
    {
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nam?
      Eveniet a ducimus nam dolorem harum. Aliquid, distinctio. Molestiae
      debitis aliquam laudantium atque pariatur numquam sunt in earum
      placeat architecto.`,
      rowSpan: 2,
    },
    {
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nam?
      placeat architecto.`,
    },
    {
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nam?
      Eveniet a ducimus nam dolorem harum. Aliquid, distinctio. Molestiae
      debitis aliquam laudantium atque pariatur numquam sunt in earum
      placeat architecto.`,
      rowSpan: 3,
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nam?',
    },
    {
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nam?
      Eveniet a ducimus nam dolorem harum. Aliquid, distinctio. Molestiae
      debitis aliquam laudantium atque pariatur numquam sunt in earum
      placeat architecto.`,
      colSpan: 2,
    },
  ],
  projects: [
    {
      src: 'https://unsplash.it/536/285',
      to: '#',
    },
    {
      src: 'https://unsplash.it/536/285',
      to: '#',
    },
    {
      src: 'https://unsplash.it/536/285',
      to: '#',
    },
    {
      src: 'https://unsplash.it/536/285',
      to: '#',
    },
  ],
})

export const getters: GetterTree<RootState, RootState> = {
  name: (state): string => state.name,
  mail: (state): string => state.mail,
  hero: (state): Hero => state.hero,
  bio: (state): string => state.bio,
  skills: (state): Skills => state.skills,
  offers: (state): Offers => state.offers,
  projects: (state): Projects => state.projects,
}

export const MutationType = {
  CHANGE_NAME: 'changeName',
  UPDATE_SKILLS: 'updateSkills',
  UPDATE_PROJECTS: 'updateProjects',
}

export const mutations: MutationTree<RootState> = {
  [MutationType.CHANGE_NAME]: (state, newName: string) => { state.name = newName },
  [MutationType.UPDATE_SKILLS]: (state, skills: Skills) => { state.skills = skills },
  [MutationType.UPDATE_PROJECTS]: (state, projects: Projects) => { state.projects = projects },
}

export const actions: ActionTree<RootState, RootState> = {
  changeName ({ commit }, _context: Context) {
    commit(MutationType.CHANGE_NAME, _context)
  },

  async getSkills ({ commit }) {
    try {
      await this.$axios.$get('/skills')
      commit(MutationType.UPDATE_SKILLS, [])
    } catch (e) {
      throw new Error(`Error white fetching skills: ${e}`)
    }
  },

  async getProjects ({ commit }) {
    try {
      await this.$axios.$get('/projects')
      commit(MutationType.UPDATE_PROJECTS, [])
    } catch (e) {
      throw new Error(`Error white fetching projects: ${e}`)
    }
  },

  async updateSkills ({ commit }, _context: Context) {
    try {
      await this.$axios.$post('/skills', _context)
      commit(MutationType.UPDATE_SKILLS, [])
    } catch (e) {
      throw new Error(`Error white update skills: ${e}`)
    }
  },

  async updateProjects ({ commit }, _context: Context) {
    try {
      await this.$axios.$post('/projects', _context)
      commit(MutationType.UPDATE_PROJECTS, [])
    } catch (e) {
      throw new Error(`Error white update projects: ${e}`)
    }
  },
}
