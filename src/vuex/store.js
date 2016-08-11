import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0
};

const mutations = {
  INCREMENT (state,data) {
    state.count = state.count + data
  }
};

export default new Vuex.Store({
  state,
  mutations
});