<script lang="ts" setup>
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <button :disabled="authStore.loading" class="btn btn-accent" @click="authStore.signIn">
    Sign In with GitHub
    <span v-if="authStore.loading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" class="24" />
  </button>
</template>
