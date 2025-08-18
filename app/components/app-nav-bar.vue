<script setup lang="ts">
import { NuxtLink } from "#components";

import AppThemeToggle from "./app-theme-toggle.vue";
</script>

<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />

      <button class="btn btn-accent">
        Sign In with GitHub
        <Icon name="tabler:brand-github" class="24" />
      </button>
    </div>
  </div>
</template>
