export const  mutations = {
    increment(state) {
      state.counter++;
    },
    AUTH_ERROR(message) {
      state.auth_message = message;
    },
    setUpRoutes(state,routes) {
      state.routes = routes
    }
  }