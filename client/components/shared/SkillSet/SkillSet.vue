<template>
  <ul class="flex flex-col space-y-7">
    <li v-for="item in $store.getters.skills" :key="item.label" class="flex items-center">
      <span class="block w-36">{{ item.label }}</span>
      <div class="w-full block bg-gray-200 overflow-hidden h-3 rounded-lg">
        <div
          class="bg-gray-700 h-full rounded-lg"
          :style="{ width: `${item.value}%` }"
        />
      </div>
      <span class="block w-20 text-right">{{ item.value }}%</span>
    </li>
  </ul>
</template>
