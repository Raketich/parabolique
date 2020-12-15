<template>
  <div class="team-layout">
    <TeamHeader :team="team" />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import TeamHeader from "@/components/TeamComponents/TeamHeader";
import AppFooter from "@/components/AppComponents/AppFooter";
export default {
  name: "TeamLayout",
  components: {
    TeamHeader,
    AppFooter
  },
  computed: {
    team() {
      return this.$store.getters.TEAMS.find(
        team => team.teamname === this.$route.params.teamname
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>