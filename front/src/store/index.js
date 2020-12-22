import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams: {},
    menuItems: [
      {
        title: "Home",
        route: "/"
      },
      {
        title: "Tracks",
        route: "/tracks"
      },
      {
        title: "Teams",
        route: "/teams"
      },
      {
        title: "Drivers",
        route: "/drivers"
      },
      {
        title: "About",
        route: "/about"
      }
    ]
  },
  mutations: {
    SET_TEAMS_TO_STATE: (state, teams) => {
      state.teams = teams;
    }
  },
  actions: {
    async GET_TEAMS_FROM_API({ commit }) {
      try {
        const teams = await axios("http://localhost:3000/teams", {
          method: "GET"
        });
        commit("SET_TEAMS_TO_STATE", teams.data);
        console.log("teams data has received");
        return teams;
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    TEAMS(state) {
      return state.teams;
    },
    TEAM: (state) => (id) => {
      return state.teams.find((team) => team.id === id);
    },
    MENU_ITEMS(state) {
      return state.menuItems;
    }
    // TRACKS: (state) => (section) => {
    //   return state.teams.find((item) => item.section === "track")
    // }
  }
});
