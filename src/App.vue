<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import TeamLayout from "@/layouts/TeamLayout";
import HomeLayout from "@/layouts/HomeLayout";

export default {
  components: {
    MainLayout,
    TeamLayout,
    HomeLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout + "-layout";
    }
  }
};
</script>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: content-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px 0;
}
</style>
