<script setup lang="ts">
import { ref, computed, watch } from "vue";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import AssistantPanel from "./AssistantPanel.vue";
import TextEditor from "./TextEditor.vue";
import ClickCounter from "./ClickCounter.vue";

const userName = ref(localStorage.getItem("brukernavn") ?? "");

watch(userName, (ny, gammel) => {
  localStorage.setItem("brukernavn", ny);
  console.log(`endret fra "${gammel}" til "${ny}"`);
});

const greeting = computed(() => {
  return userName.value ? `Hei, ${userName.value}` : "Hei, ukjent";
});
</script>

<template>
  <div class="app-layout">
    <AppHeader v-model:user-name="userName" class="app-header"> {{ greeting }}</AppHeader>
    <AppFooter appName="Code Collab" :year="2026" class="app-footer" />
    <AssistantPanel class="app-assistant" />
    <TextEditor class="app-editor" user-name="Sohaila" app-name="hallo" />
    <ClickCounter :initial="5" @inc="(n) => console.log(`teller: ${n}`)" />
    <ClickCounter :initial="10" />
  </div>
</template>

<style scoped>
.app-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 1px;
  background: #ddd;
}
.app-header,
.app-footer {
  grid-column: 1 / -1;
}
</style>
