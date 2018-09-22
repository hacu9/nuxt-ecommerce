import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      auth_message: "",
      auth_type: "",
      routes: []
    },
    mutations: {
      increment(state) {
        state.counter++;
      },
      AUTH_ERROR(message) {
        state.auth_message = message;
      },
      setUpRoutes(state,routes) {
        state.routes = routes
      }
    },
    getters: {
      loggedIn(state) {
        return state.auth.loggedIn;
      },
      user(state) {
        return state.auth.user;
      },
      routes: (state) => (route) => {
        if(!state.routes.hasOwnProperty(route)) return '404'

        return state.routes[route][0]
      },
      // d (state){
      //  return function(route){
      //   return 'd'
      //   }
      // }
      
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
      getRoutes({commit , state}, payload){
        this.$axios.get('routes').then(x => {
          this.commit("setUpRoutes", x.data);
        })
      }
    }
  });
};

export default createStore;
