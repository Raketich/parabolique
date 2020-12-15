<template>
  <div class="home-layout-container">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/AppComponents/AppHeader";

export default {
  name: "HomeLayout",
  components: {
    AppHeader
  }
};
</script>

<style lang="scss" scoped>
</style>