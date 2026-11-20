import { ref, computed } from "vue";

export type Role = "user" | "assistant";

export interface Message {
  id: number;
  role: Role;
  text: string;
}

export function useMessages() {
  const messages = ref<Message[]>([]);
  const newMessage = ref("");
  let nesteId = 1;

  const messageCount = computed(() => messages.value.length);

  function send() {
    const text = newMessage.value.trim();
    if (!text) return;

    messages.value.push({ id: nesteId++, role: "user", text });
    newMessage.value = "";

    // STUB SKAL BYTTES UT TIL EKTE API I UKE 4
    setTimeout(() => {
      messages.value.push({
        id: nesteId++,
        role: "assistant",
        text: "Godt spørsmål. Dette svaret er en stub.",
      });
    }, 8000);
  }
  return { messages, newMessage, messageCount, send };
}
