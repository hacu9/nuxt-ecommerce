import Vuex from "vuex";
import {getters} from '~/store/getters'
import {mutations} from '~/store/mutations'
import {actions} from '~/store/actions'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      auth_message: "",
      auth_type: "",
      routes: []
    },
   mutations,
   getters,
   actions
  });
};

export default createStore;
