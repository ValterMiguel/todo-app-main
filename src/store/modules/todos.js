const state = {
    todos: [
        {
            id: 1,
            title: "Hit the gym",
            completed:false
        },
        {
            id: 2,
            title: "Meet George",
            completed:false
         },
        {
            id: 3,
            title: "Buy eggs",
            completed:true
        },
        {
            id: 4,
            title: "Read a book",
            completed:true
        },
        {
            id: 5,
            title: "Organize office",
            completed:true
        } 
    ],
    todos2 : [],
    msn:'drag and drop to reorder the list',
    tab_1: true,
    tab_2: false,
    tab_3: false,
    tab_active: "all",
    tabItems: [
        { id: "all", title: "All" },
        { id: "active", title: "Active" },
        { id: "completed", title: "Completed" },
    ],
    showIcon: null,
    // nightMode: localStorage.getItem("nightMode") || false,

}
const getters ={
    // nightMode: (state) => state.nightMode,
    showDragAndDropLlist: (state) => state.todos2.length === 0,
    allTodos: (state) => state.todos,
    allTodos2: (state) => state.todos2,
    tabItems: (state) => state.tabItems,
    itemsLeft: (state) => state.todos.length,
    active: (state) => state.todos.filter((todo) => todo.completed !== true),
    completed:(state) => state.todos.filter((todo) => todo.completed == !false),
    tab_active: (state) => state.tab_active,
    tab_1: (state) => state.tab_1,
    tab_2: (state) => state.tab_2,
    tab_3: (state) => state.tab_3,
    showIcon: (state) => state.showIcon,
    msn: (state) => state.msn
}
const actions ={
    addTodo({ commit }, title){
        const data = 
            {
                id: state.todos.length + 1,
                title: title,
                completed: false
            }
        
        console.log(data)
        commit('NEW_TODO', data)
    },
    switchTab({ commit }, element) {
       
        commit('TAB_DISPLAY', element)

    },
    checkTodo({ commit }, todo){
        todo.completed = !todo.completed
        commit('SHOW_DELETE_ICON', todo)
    },
    clearCompleted({commit}) {
        commit('CLEAR_COMPLETED')
    },
    deleteTodo({commit}, todo) {
        commit('DELETE_TODO', todo)
    }
}
const mutations ={
    SHOW_DELETE_ICON: (state, showIcon) => state.showIcon = showIcon, 
    NEW_TODO: (state, todo) => state.todos.unshift(todo),
    UPDATE_LIST :(state, todos) => state.todos = todos,
    UPDATE_LIST_2:(state, todos2) => state.todos2 = todos2,
    UPDATE_ICON: (state, showIcon) => state.showIcon = showIcon,
    TAB_DISPLAY(state, element){
        state.tab_active = element.id;
        if (element.id === "all") {
          state.tab_1 = true;
          state.tab_2 = false;
          state.tab_3 = false;
        }
        if (element.id === "active") {
            state.tab_1 = false;
            state.tab_2 = true;
            state.tab_3 = false;
        }
        if (element.id === "completed") {
            state.tab_1 = false;
            state.tab_2 = false;
            state.tab_3 = true;
        }
    },
    SHOW_CHECKED_TODO:(state, todo) => state.todo = todo,
    UPDATE_ACTIVE:(state, active) => state.active = active,
    UPDATE_COMPLETED:(state, completed) => state.completed = completed,
    CLEAR_COMPLETED:(state) => state.todos = [],
    DELETE_TODO:(state, todo) => state.todos = state.todos.filter((item) => item !== todo),
    // UPDATE_NIGHT_MODE: (state, nightMode) => state.nightMode = nightMode

}

export default {
    state,
    getters,
    actions,
    mutations
}