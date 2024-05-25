<script setup>
import {ChartBarIcon, ClockIcon, ListBulletIcon} from "@heroicons/vue/24/outline/index.js";

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon,
};
</script>

<template>
  <nav class="sticky bottom-0 z-20 bg-white">
    <ul class="flex items-center justify-around border-t">
      <li
        v-for="icon, page in navItems"
        :key="page"
        class="flex-1"
      >
        <a
          :href="`#${page}`"
          class="flex flex-col items-center p-2 text-xs capitalize"
        >
          <component
            :is="icon"
            class="h-6 w-6"
          /> {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>
