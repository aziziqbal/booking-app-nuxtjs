export const state = () => ({
  login: true,
  register: false,
})
export const mutations = {
  setLogin(state, val) {
    state.login = val
    state.register = false
  },
  setRegister(state, val) {
    state.register = val
    state.login = false
  }
}
