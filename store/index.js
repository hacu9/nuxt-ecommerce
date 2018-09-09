import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      auth_message: "",
      auth_type: ""
    },
    mutations: {
      increment(state) {
        state.counter++;
      },
      AUTH_ERROR(message) {
        this.state.auth_message = message;
      }
    },
    getters: {
      loggedIn(state) {
        return state.auth.loggedIn;
      },
      user(state) {
        return state.auth.user;
      },
      userAvatar(state) {
        // return `/public/avatars/avatar-${state.auth.user.id}.png`;
      }
    },
    actions: {
      signup({ commit, state }, payload) {
        this.$axios
          .post("auth/signup", payload)
          .then(res => {
            if (res.status == 201) {
              this.$auth.login({
                data: {
                  email: payload.email,
                  password: payload.password,
                  remember_me: true
                }
              });
            }
            this.commit("AUTH_ERROR", res);
          })
          .catch(error => {
            console.log(error);
            this.commit("AUTH_ERROR", error);
          });
      }
    }
  });
};

export default createStore;
