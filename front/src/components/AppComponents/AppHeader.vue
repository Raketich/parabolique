<template>
  <div class="container">
    <ul>
      <router-link to="/tracks">Tracks</router-link>
      <router-link to="/teams">Teams</router-link>
      <router-link to="/drivers">Drivers</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  width: 100vw;
  height: 30px;
  background: rgba(157, 157, 157, 0.7);
  padding: 15px;
  z-index: 100;

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    a {
      margin-right: 15px;
      font-weight: bold;
      // color: #2c3e50;
      color: #fff;
      text-decoration: none;
      &.router-link-exact-active {
        // color: rgb(255, 255, 255);
        color: rgb(255, 111, 111);
      }
    }
  }
}
</style>