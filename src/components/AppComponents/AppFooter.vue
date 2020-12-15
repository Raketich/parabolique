<template>
  <div class="app-footer-container">
    <div class="main-menu">
      <ul>
        <router-link
          v-for="menuItem in MENU_ITEMS"
          :key="menuItem.title"
          :to="menuItem.route"
        >{{menuItem.title}}</router-link>
      </ul>
    </div>
    <div class="second-block"></div>
    <div class="third-block"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppFooter",
  computed: {
    ...mapGetters(["MENU_ITEMS"])
  }
};
</script>

<style lang="scss" scoped>
.app-footer-container {
  width: 100%;
  height: 40vh;
  background: rgb(144, 150, 215);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .main-menu {
    height: 100%;
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: left;
      list-style-type: none;

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        padding: 5px;

        &:hover {
          color: gold;
        }
      }
    }
  }
}
</style>