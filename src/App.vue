<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import AssistantPanel from "./AssistantPanel.vue";
import TextEditor from "./TextEditor.vue";
import ClickCounter from "./ClickCounter.vue";

const userName = ref("");
</script>

<template>
  <div class="app-layout">
    <AppHeader v-model:user-name="userName" class="app-header" />
    <AppFooter appName="Code Collab" :year="2026" class="app-footer" />
    <AssistantPanel class="app-assistant" />
    <TextEditor class="app-editor" />
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
