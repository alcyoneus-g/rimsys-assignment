## Rimsys test assignment

- Nice to have (Planned but didn't write due to limited time)
  - Request validation in backend endpoints
    ```bash
    Bad Request: Invalide Skill Value (> 100), Project url
    ```
  - Registered user can Publish/Draft portfolio
  - Mobile responsive in frontend
  - General Error handling UI in frontend
  - Deployment (Github actions)
  - Dockerize

### What is included

- [NUXT](https://nuxtjs.org) front end, a progressive Vue.js framework - `v2.15.4`

  - [@nuxtjs/typescript-build](https://typescript.nuxtjs.org/) TypeScript Support for Nuxt.js - `v2.1.0`
  - [@nuxtjs/composition-api](https://composition-api.nuxtjs.org/) Composition API Support for Nuxt.js - `v0.22.4`
  - [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/) a [utility-first](https://tailwindcss.com) framework - now with PurgeCSS built in - `v3.1.0`
  - [@nuxtjs/axios](https://github.com/nuxt-community/axios-module) to communicate with our API - `v5.12.0`
  - [nuxt-tailvue](https://github.com/acidjazz/nuxt-tailvue) a collection of components built for Nuxt.js, powered by TailwindCSS `v1.0.16`

- [Laravel](https://laravel.com) - for our API - `v8.27.0`
  - [MetAPI](https://github.com/acidjazz/metapi) - API helpers and utilities - `v2.1.4`
  - [debugbar](https://github.com/barryvdh/laravel-debugbar) - awesome debugbar for our API - `v3.5.5`
  - [ide-helper](https://github.com/barryvdh/laravel-ide-helper) - Helper files to enable help with IDE autocompletion - `v2.9.3`

### Installation

- clone from github
- run `yarn` and `composer install` to install all of your deps
- copy `.env.example` to `.env` and configure it to your likings
- TL;DR

```bash
git clone git@github.com:acidjazz/laranuxt.git; cd laranuxt; yarn; composer install; cp .env.example .env;
```

- Feel free to delete excess media in `/client/static/`, just images for the readme

### Local Environment

- run `yarn dev` in one terminal for our nuxt dev setup
- run `yarn api` (alias for `./artisan serve`) in another terminal for our laravel API

### Features
