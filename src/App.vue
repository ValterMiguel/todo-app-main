<template>
  <div id="app" :class="{ 'theme-dark': darkMode }">
    <div class="header">
      <img src="./assets/bg/bg-desktop-light.jpg" v-if="darkMode" />
      <img src="./assets/bg/bg-desktop-dark.jpg" v-else />
    </div>
    <div class="main">
      <div class="todos-header">
        <a class="todos-title">todo</a>
        <div class="todos-header-right">
          <Toggle></Toggle>
        </div>
      </div>
      <div class="add-todo-container">
        <add-todo></add-todo>
      </div>
      <div class="todos-card">
        <div class="todos-container">
          <div class="tab-content" v-show="tab_1">
            <todos-list>
              <draggable v-model="allTodos" group="todoGroup">
                <todo-item
                  v-for="todo in allTodos"
                  :key="todo.id"
                  :todo="todo"
                ></todo-item>
              </draggable>
            </todos-list>
          </div>
          <div class="tab-content" v-show="tab_2">
            <todos-list>
              <todo-item
                v-for="todo in active"
                :key="todo.id"
                :todo="todo"
              ></todo-item>
            </todos-list>
          </div>
          <div class="tab-content" v-show="tab_3">
            <todos-list>
              <todo-item
                v-for="todo in completed"
                :key="todo.id"
                :todo="todo"
              ></todo-item>
            </todos-list>
          </div>
        </div>
        <div class="todos-footer">
          <div class="todos-footer-content">
            <div class="left">
              <span>{{ itemsLeft }} items left</span>
            </div>
            <div class="center">
              <div v-for="tab in tabItems" :key="tab.id" class="tab-links">
                <span
                  :class="tab.id === tab_active ? 'tab_active' : ''"
                  @click="tabDisplay(tab)"
                  >{{ tab.title }}</span
                >
              </div>
            </div>
            <div class="right">
              <span @click="clearCompleted">Clear Completed</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-drag-and-drop">
        <div v-if="showDragAndDropLlist">
          <p>{{ msn }}</p>
        </div>
        <div class="drag-drop-container" else>
          <todos-list>
            <draggable v-model="allTodos2" group="todoGroup">
              <todo-item
                v-for="todo in allTodos2"
                :key="todo.id"
                :todo="todo"
              ></todo-item>
            </draggable>
          </todos-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapGetters, mapActions } from "vuex";
import AddTodo from "./components/AddTodo.vue";
import TodosList from "./components/TodosList.vue";
import TodoItem from "./components/TudoItem.vue";
import Toggle from "./components/Toggle.vue";

export default {
  name: "App",
  components: { AddTodo, TodosList, TodoItem, Toggle, draggable },
  computed: {
    ...mapGetters([
      "tabItems",
      "itemsLeft",
      "active",
      "completed",
      "tab_active",
      "tab_1",
      "tab_2",
      "tab_3",
      "msn",
      "showDragAndDropLlist",
      "themeToggle",
      "getTheme",
    ]),
    allTodos: {
      get() {
        return this.$store.getters.allTodos;
      },
      set(value) {
        this.$store.commit("UPDATE_LIST", value);
      },
    },
    allTodos2: {
      get() {
        return this.$store.getters.allTodos2;
      },
      set(value) {
        this.$store.commit("UPDATE_LIST_2", value);
      },
    },
    active: {
      get() {
        return this.$store.getters.active;
      },
      set(value) {
        this.$store.commit("UPDATE_ACTIVE", value);
      },
    },
    completed: {
      get() {
        return this.$store.getters.completed;
      },
      set(value) {
        this.$store.commit("UPDATE_COMPLETED", value);
      },
    },
    darkMode: {
      get() {
        return this.$store.getters.darkMode;
      },
      set(value) {
        this.$store.commit("UPDATE_DARK_MODE", value);
      },
    },
  },

  methods: {
    ...mapActions(["switchTab", "clearCompleted"]),
    tabDisplay(tab) {
      this.switchTab(tab);
    },
  },
};
</script>

<style></style>
