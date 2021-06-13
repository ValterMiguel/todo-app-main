<template>
  <div class="todo-item-container">
    <div
      class="todo-item"
      @mouseover="showIcon = todo"
      @mouseout="showIcon = null"
    >
      <div
        class="todo-circle"
        :class="{ active: todo.completed }"
        @click="showCheckedTodo(todo)"
      >
        <img src="../assets/icons/icon-check.svg" v-if="todo.completed" />
      </div>
      <p :class="{ completed: todo.completed }">{{ todo.title }}</p>
      <span @click="deleteTodo(todo)">
        <img
          src="../assets/icons/icon-cross.svg"
          alt=""
          v-if="showIcon === todo"
        />
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo"],
  computed: {
    showIcon: {
      get() {
        return this.$store.getters.showIcon;
      },
      set(value) {
        this.$store.commit("SHOW_DELETE_ICON", value);
      },
    },
  },
  methods: {
    ...mapActions(["checkTodo", "deleteTodo"]),
    showCheckedTodo(todo) {
      this.checkTodo(todo);
    },
  },
};
</script>

<style></style>
