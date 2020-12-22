<template>
  <div class="team-list container">
    <TeamCard class="teams-list-team-card" v-for="team in TEAMS" :key="team.id" :teamData="team" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import TeamCard from "@/components/TeamComponents/TeamCard";

export default {
  name: "TeamsList",
  components: {
    TeamCard
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["GET_TEAMS_FROM_API"])
  },
  computed: {
    ...mapGetters(["TEAMS"])
  },
  mounted() {
    console.log("mounted");
    this.GET_TEAMS_FROM_API();
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;

  .teams-list-team-card:first-child {
    margin-top: 65px;
  }
}
</style>
