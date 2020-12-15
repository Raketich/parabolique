<template>
  <div class="container team-view">
    <TeamYearCard
      class="team-view-year-card"
      v-for="year in team.yearData"
      :key="year.year"
      :yearData="year"
      :teamName="team.teamname"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TeamYearCard from "@/components/TeamComponents/TeamYearCard.vue";
// import TeamSidebar from "@/components/TeamComponents/TeamSidebar.vue";

export default {
  name: "TeamView",
  components: {
    TeamYearCard
    // TeamSidebar
  },

  computed: {
    ...mapGetters(["TEAM", "TEAMS"]),
    team() {
      return this.$store.getters.TEAMS.find(
        team => team.teamname === this.$route.params.teamname
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .team-view-year-card {
    margin: 25px 0;
  }

  .team-view-year-card:first-child {
    margin-top: 105px;
  }
}
</style>
