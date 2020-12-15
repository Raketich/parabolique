<template>
  <div class="menu-burger-opener">
    <div class="menu-burger-opener__item"></div>
  </div>
</template>

<script>
export default {
  name: "MenuBurgerOpener"
};
</script>

<style lang="scss" scoped>
.menu-burger-opener {
  display: flex;
  align-items: center;
  height: 30px;
  width: 30px;

  cursor: pointer;
  .menu-burger-opener__item {
    position: relative;
    width: 30px;
    height: 1px;
    background-color: black;

    &::after,
    &::before {
      position: absolute;
      top: 10px;
      left: 0px;
      content: "";
      width: 30px;
      height: 1px;
      background-color: black;
      transition: all 200ms ease;
    }
    &::before {
      top: -10px;
    }
  }

  &:hover .menu-burger-opener__item::after {
    transform: rotate(45deg) translateY(-10px);
  }

  &:hover .menu-burger-opener__item::before {
    transform: rotate(-45deg) translateY(-10px);
  }

  &:hover .menu-burger-opener__item {
    background-color: transparent;
  }
}
</style>