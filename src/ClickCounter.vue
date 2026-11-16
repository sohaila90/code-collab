<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{ initial?: number }>();
const emit = defineEmits<{ inc: [value: number]; reset: [] }>();

const count = ref(props.initial ?? 0);
const doubled = computed(() => count.value * 2);

function increment(): void {
  count.value++;
  emit("inc", count.value);
}

function reset(): void {
  count.value = props.initial ?? 0;
  emit("reset");
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubled }}</p>
    <button @click="increment">+1</button>
    <button @click="reset">Reset</button>
  </div>
</template>
