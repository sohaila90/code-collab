<script setup lang="ts">
import { ref } from "vue";

const text = ref("");
</script>

<template>
  <main>
    <textarea v-model="text" placeholder="Skriv koden din her.." />
  </main>
</template>
