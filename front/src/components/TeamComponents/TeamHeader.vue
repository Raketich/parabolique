<template>
  <div class="team-header" :style="{background: team.colors.mainColor}">
    <TeamSidebar ref="teamSidebar" />
    <div class="team-sidebar-opener header-item" @click="openTeamSidebar">SB</div>
    <div class="team-logo header-item">
      <!-- <img src="../../assets/images/teams/ferrari/logo-small.png" alt /> -->
      <img :src="require('../../assets/images/teams/' + team.teamname + '/' + team.logoImage)" alt />
    </div>
    <div
      class="right-side-menu-opener header-item"
      @click="isRightSideMenuOpen=!isRightSideMenuOpen"
    >MM</div>
    <RightSideMenu :menuItems="MENU_ITEMS" v-show="isRightSideMenuOpen" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TeamSidebar from "@/components/TeamComponents/TeamSidebar";
import RightSideMenu from "@/components/AppComponents/RightSideMenu";
export default {
  name: "TeamHeader",
  components: {
    TeamSidebar,
    RightSideMenu
  },
  props: {
    team: {
      type: Object
    }
  },
  data() {
    return {
      isRightSideMenuOpen: false
    };
  },
  methods: {
    openTeamSidebar() {
      console.log("clicked sb");
      this.$refs.teamSidebar.openTeamSidebar();
      // this.$emit("openTeamSidebar");
    }
  },
  computed: {
    ...mapGetters(["MENU_ITEMS"])
  }
};
</script>

<style lang="scss" scoped>
.team-header {
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 2px rgb(113, 113, 113);
  //   margin-bottom: 35px;
  z-index: 100;

  .header-item {
    padding: 0px 15px;
    color: #fff;
    font-weight: 500;
  }

  .team-sidebar-opener {
    cursor: pointer;
  }

  .right-side-menu-opener {
    cursor: pointer;
  }

  .team-logo {
    margin-top: 5px;
    img {
      height: 55px;
    }
  }
}
</style>