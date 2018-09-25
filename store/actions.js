export const  actions = {
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