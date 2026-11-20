<script setup lang="ts">
import { useMessages } from "./composables/useMessages";

defineProps<{ userName: string }>();

const { messages, newMessage, messageCount, send } = useMessages();
</script>

<template>
  <aside>
    <h2>Assistent {{ messageCount }}</h2>
    <p v-if="useMessages.length === 0">Ingen messages enda!</p>
    <ul v-else>
      <li v-for="message in messages" :key="message.id" :class="message.role">
        <strong>{{ message.role === "user" ? userName : "Assistent" }}:</strong>
        {{ message.text }}
      </li>
    </ul>
    <input v-model="newMessage" @keyup.enter="send" placeholder="Ask for the code..." />
    <button @click="send">Send</button>
    <p>We shall see tomorrow!</p>
  </aside>
</template>
