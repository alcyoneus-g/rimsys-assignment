<template>
  <div class="rounded-xl shadow-2xl overflow-hidden w-72">
    <img
      :src="$store.getters.hero.avatar"
      class="w-full h-full object-cover"
      alt=""
    >
  </div>
</template>
