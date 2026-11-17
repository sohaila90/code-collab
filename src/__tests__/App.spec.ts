import { describe, it, expect } from "vitest";
import { ref, computed } from "vue";

import { mount } from "@vue/test-utils";
import App from "../App.vue";

describe("App", () => {
  it("mounts renders properly", () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain(
      "Code CollabHei, ukjentCode Collab © 2026AssistentWe shall see tomorrow!Sohaila redigerer0Count: 5Double: 10+1ResetCount: 10Double: 20+1Reset",
    );
  });
});

describe("greeting", () => {
  it("hilser med navn", () => {
    const userName = ref("Sohaila");
    const greeting = computed(() => (userName.value ? `Hei ${userName.value}` : "Hei, ukjent"));
    expect(greeting.value).toBe("Hei Sohaila");
  });
});
