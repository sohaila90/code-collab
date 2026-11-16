<script setup lang="ts">
defineProps<{ appName: string; year: number }>();
</script>

<template>
  <footer>{{ appName }} © {{ year }}</footer>
</template>
