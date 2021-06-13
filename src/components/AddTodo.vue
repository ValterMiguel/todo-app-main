<template>
  <div>
    <div class="circle"></div>
    <input
      type="text"
      placeholder="Create a new todo..."
      v-model="title"
      @keyup.enter="addNewTodo"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    addNewTodo() {
      this.addTodo(this.title);
      this.title = "";
    },
  },
};
</script>

<style></style>
