<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodosList",
  computed: {
    ...mapGetters([
      "tabItems",
      "itemsLeft",
      "active",
      "completed",
      "tab_active",
    ]),
    allTodos: {
      get() {
        return this.$store.getters.allTodos;
      },
      set(value) {
        this.$store.commit("updateList", value);
      },
    },
    allTodos2: {
      get() {
        return this.$store.getters.allTodos2;
      },
      set(value) {
        this.$store.commit("updateList2", value);
      },
    },
  },
  methods: {
    ...mapActions(["switchTab"]),
    tabDisplay(tab) {
      this.switchTab(tab);
    },
  },
};
</script>

<style></style>
