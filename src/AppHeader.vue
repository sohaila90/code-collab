<script setup lang="ts">
defineProps<{ userName: string }>();
const emit = defineEmits<{ "update: UserName": [value: string] }>();
</script>

<template>
  <header>
    <h1>Code Collab</h1>
    <input
      :value="userName"
      @input="emit('update: UserName', ($event.target as HTMLInputElement).value)"
      placeholder="Skriv navnet ditt..."
    />
  </header>
</template>

<style scoped></style>
