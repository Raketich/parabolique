<template>
  <div class="not-found-conatiner">
    <h2>Seems like something goes wrong</h2>
    <router-link :to="{name: 'Home'}">Go home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
.not-found-conatiner {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("../../assets/images/notfoundpage/not-found-3.jpg");

  background-size: cover;
  h2 {
    width: 100%;
    padding: 15px;
    font-size: 3rem;

    color: rgba(245, 107, 178, 0.947);
    background: rgba(192, 192, 192, 0.486);
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    color: #fff;
    margin-top: 20px;
    background: rgba(192, 192, 192, 0.486);
    padding: 15px;
    border-radius: 20px;
    font-weight: 500;

    &:hover {
      color: pink;
      background: rgba(192, 192, 192, 0.701);
    }
  }
}
</style>
