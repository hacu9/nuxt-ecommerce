import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      auth_message: "",
      auth_type: "",

      notify: false,
      notifyType: "info",
      notifyMsg: ""
    },
    mutations: {
      increment(state) {
        state.counter++;
      },
      AUTH_ERROR(message) {
        state.auth_message = message;
      },
      start_notify(state, data) {
        // console.log(data);
        state.notify = true;
        state.notifyMsg = data.msg;
      },
      start_notify(state, data) {
        // console.log(data);
        state.notify = false;
      }
    },
    getters: {
      loggedIn(state) {
        return state.auth.loggedIn;
      },
      user(state) {
        return state.auth.user;
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
      },
      notify({ commit, state }, payload) {
        this.commit("start_notify", payload);
      },
      notified({ commit, state }, payload) {
        this.commit("end_notify", payload);
      }
    }
  });
};

export default createStore;
