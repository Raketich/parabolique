<template>
  <div class="right-side-menu">
    <ul>
      <router-link
        v-for="menuItem in menuItems"
        :to="menuItem.route"
        :key="menuItem.title"
      >{{menuItem.title}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RightSideMenu",
  props: {
    menuItems: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.right-side-menu {
  position: absolute;
  width: 150px;
  top: 60px;
  right: 0px;
  background: rgba(128, 128, 128, 0.7);
  //   border-radius: 0 0 20px 20px;
  ul {
    display: flex;
    flex-direction: column;
    a {
      list-style-type: none;
      text-decoration: none;
      color: #fff;
      padding: 10px 0;

      &:last-child {
        padding-bottom: 15px;
      }

      &:hover {
        background: rgba(128, 128, 128, 0.562);
      }
    }
  }
}
</style>