<template>
  <div
    class="container team-sidebar"
    :class="{active: isSidebarOpen}"
    @openTeamSidebar="openTeamSidebar"
  >
    <button class="close-team-sidebar-btn" @click="isSidebarOpen=!isSidebarOpen">close</button>
    <div class="filters filters-team">
      <div class="filters-team__by-year">filter by year</div>
      <div class="filters-team__by-driver">filter by driver</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamSidebar",
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    openTeamSidebar() {
      console.log(this.isSidebarOpen);
      this.isSidebarOpen
        ? (this.isSidebarOpen = false)
        : (this.isSidebarOpen = true);
      console.log(this.isSidebarOpen);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  transform: translateX(-300px);
  background: rgba(128, 128, 128, 0.425);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: transform 400ms ease-out;

  &.active {
    transform: translateX(0);
    z-index: 99;
  }

  .close-team-sidebar-btn {
    position: absolute;
    width: 50px;
    padding: 10px 5px;
    top: 5px;
    right: 5px;
    color: rgba(128, 128, 128, 0.514);
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.425);
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.623);
      color: rgba(128, 128, 128, 0.814);
    }
  }

  .filters-team {
    margin-top: 35px;
    color: #fff;
  }
}

@media (max-width: 830px) {
  // .container {
  //   // position: absolute;
  //   width: 50px;
  // }
}
</style>