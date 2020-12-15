<template>
  <div class="home">
    <!-- <AppHeader /> -->
    <LandingScreen />
    <ArticlesScreen />
  </div>
</template>

<script>
// @ is an alias to /src
// import AppHeader from "@/components/AppComponents/AppHeader";
import LandingScreen from "@/components/HomePageComponents/LandingScreen";
import ArticlesScreen from "@/components/HomePageComponents/ArticlesScreen";
export default {
  name: "Home",
  components: {
    LandingScreen,
    ArticlesScreen
    // AppHeader
  }
};
</script>

<style lang="scss">
</style>

