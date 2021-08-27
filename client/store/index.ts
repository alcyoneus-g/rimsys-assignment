import type { GetterTree, ActionTree, MutationTree } from 'vuex'

interface Hero {
  position: string;
  avatar: string;
  intro: string;
}

interface Skill {
  id: number;
  label: string;
  value: number;
  created_at?: string;
  updated_at?: string;
}

type Skills = Skill[]

type Offers = {
  title?: string;
  secondaryTitle?: string;
  text?: string
  colSpan?: number;
  rowSpan?: number;
}[]

interface Project {
  id: number;
  src: string;
  to: string;
  created_at?: string;
  updated_at?: string;
}

type Projects = Project[]

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
  skills: [],
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
  projects: [],
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
  UPDATE_SKILLS: 'updateSkills',
  UPDATE_PROJECTS: 'updateProjects',
}

export const mutations: MutationTree<RootState> = {
  [MutationType.UPDATE_SKILLS]: (state, skills: Skills) => { state.skills = skills },
  [MutationType.UPDATE_PROJECTS]: (state, projects: Projects) => { state.projects = projects },
}

export const actions: ActionTree<RootState, RootState> = {
  async getSkills({ commit }) {
    try {
      const skills = await this.$axios.$get('/skills')
      commit(MutationType.UPDATE_SKILLS, skills)
    } catch (e) {
      throw new Error(`Error white fetching skills: ${e}`)
    }
  },

  async getProjects({ commit }) {
    try {
      const projects = await this.$axios.$get('/projects')
      commit(MutationType.UPDATE_PROJECTS, projects)
    } catch (e) {
      throw new Error(`Error white fetching projects: ${e}`)
    }
  },

  async updateSkill({ commit, state }, _context: Skill) {
    try {
      const updatedSkill = await this.$axios.$put(`/skills/${_context.id}`, _context)

      const skills: Skills = JSON.parse(JSON.stringify(state.skills))
      const targetIndex = skills.findIndex(skill => skill.id === updatedSkill.id);
      if (targetIndex !== -1) skills[targetIndex] = updatedSkill

      commit(MutationType.UPDATE_SKILLS, skills)
    } catch (e) {
      throw new Error(`Error white updating skill: ${e}`)
    }
  },

  async deleteSkill({ commit, state }, _context: number) {
    try {
      await this.$axios.$delete(`/skills/${_context}`)
      const skills: Skills = JSON.parse(JSON.stringify(state.skills))
      const targetIndex = skills.findIndex(skill => skill.id === _context);
      if (targetIndex !== -1) skills.splice(targetIndex, 1)

      commit(MutationType.UPDATE_SKILLS, skills)
    } catch (e) {
      throw new Error(`Error white deleting skill: ${e}`)
    }
  },

  async addSkill({ commit, state }, _context: Skill) {
    try {
      const addedSkill = await this.$axios.$post('/skills', _context)

      const skills: Skills = JSON.parse(JSON.stringify(state.skills))
      skills.push(addedSkill)

      commit(MutationType.UPDATE_SKILLS, skills)
    } catch (e) {
      throw new Error(`Error white adding new skill: ${e}`)
    }
  },

  async updateProject({ commit, state }, _context: Project) {
    try {
      const updatedProject = await this.$axios.$put(`/projects/${_context.id}`, _context)

      const projects: Projects = JSON.parse(JSON.stringify(state.projects))
      const targetIndex = projects.findIndex(skill => skill.id === updatedProject.id);
      if (targetIndex !== -1) projects[targetIndex] = updatedProject

      commit(MutationType.UPDATE_SKILLS, projects)
    } catch (e) {
      throw new Error(`Error white updating skill: ${e}`)
    }
  },

  async deleteProject({ commit, state }, _context: number) {
    try {
      await this.$axios.$delete(`/projects/${_context}`)
      const projects: Projects = JSON.parse(JSON.stringify(state.projects))
      const targetIndex = projects.findIndex(skill => skill.id === _context);
      if (targetIndex !== -1) projects.splice(targetIndex, 1)

      commit(MutationType.UPDATE_PROJECTS, projects)
    } catch (e) {
      throw new Error(`Error white deleting projects: ${e}`)
    }
  },

  async addProject({ commit, state }, _context: Skill) {
    try {
      const addedProject = await this.$axios.$post('/projects', _context)

      const projects: Projects = JSON.parse(JSON.stringify(state.projects))
      projects.push(addedProject)

      commit(MutationType.UPDATE_PROJECTS, projects)
    } catch (e) {
      throw new Error(`Error white adding new projects: ${e}`)
    }
  },
}
