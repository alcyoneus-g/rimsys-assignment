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
  name: 'Jacob Liu',
  mail: 'spring.scene@hotmail.com',
  hero: {
    position: 'Full Stack Web Developer',
    avatar: 'https://unsplash.it/290/335',
    intro: `Full Stack Engineer with 5+ years of experience in developing user interfaces, testing, debugging within eCommerce technologies. 
    Adept at contributing highly collaborative work environment, finding solutions and determining customer satisfaction. Always try to learning latest technologies`,
  },
  bio: `As I senior full stack software engineer, I work closely with cross-functional teams, including participation in daily Scrum calls. I always try to follow and maintain a good coding architecture before starting coding, I usually brainstormed my idea with other developers.
  I have great passion and great honored showcases with public certifications. And since, I've been doing this exact type of work for last 5 years, I would be able to hit the ground running and start contribution immediately to your team's efforts.`,
  skills: [],
  offers: [
    {
      title: 'Laravel',
      secondaryTitle: 'is my strength.',
      text: `Designed and built back-end services that expose REST APIs for
      consumption via mobile and web-based admin panel.`,
    },
    {
      title: 'Vue, TailWindCSS',
      text: `Used in HealthCare, Education and ECommerce projects. Translate design into pixel-perfect frontend pages in mobile responsive.
      `,
      colSpan: 2,
      rowSpan: 2,
    },
    {
      title: 'Typescript',
      secondaryTitle: 'makes me precise and organized',
    },
    {
      text: `Proficiency with at least one server-side languages/frameworks such as PHP and Laravel`,
      rowSpan: 2,
    },
    {
      text: `Lifecycle of software development - TDD, CI/CD`,
    },
    {
      text: `Hands-on Experience implementing cloud infrastructure, Ideally with AWS Lambda serverless architecture.
      Passion for keeping current on trends related to frontend architectures, performance techniques, accessibility, localization, security and web design/user experience`,
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
