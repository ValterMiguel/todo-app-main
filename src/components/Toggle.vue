<template>
  <div class="icon-container" @click="darkMode = !darkMode">
    <img src="../assets/icons/icon-moon.svg" v-if="darkMode" />
    <img src="../assets/icons/icon-sun.svg" v-else />
  </div>
</template>

<script>
export default {
  name: "Toggle",
  computed: {
    darkMode: {
      get() {
        return this.$store.getters.darkMode;
      },
      set(value) {
        this.$store.commit("UPDATE_DARK_MODE", value);
      },
    },
  },
  watch: {
    darkMode() {
      localStorage.setItem("darkMode", JSON.stringify(this.darkMode));
    },
  },
  created() {
    this.darkMode = JSON.parse(localStorage.getItem("darkMode"));
  },
};
</script>

<style></style>
