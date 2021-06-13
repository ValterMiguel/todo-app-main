const state = {
  darkMode: false

}
const getters = {
  darkMode: state => state.darkMode,
}

const actions = {
};
const mutations = {
  UPDATE_DARK_MODE: (state, darkMode) => state.darkMode = darkMode
}
export default {
  state,
  getters,
  mutations,
  actions,
};
