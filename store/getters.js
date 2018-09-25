export const getters =  {
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
}