<script setup lang="ts">
import { ref, computed } from "vue";
import EditorToolbar from "./EditorToolbar.vue";

defineProps<{ userName: string }>();

const text = ref("");
const charCount = computed(() => text.value.length);
</script>

<template>
  <section>
    <EditorToolbar :user-name="userName" :char-count="charCount" />
    <textarea v-model="text" placeholder="Skriv koden din her.." />
  </section>
</template>
