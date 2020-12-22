<template>
  <div class="home-page-landing-screen">
    <div class="container">
      <div class="overlay"></div>
      <div class="content">
        <div class="title">
          <h1>Parabolique</h1>
        </div>
        <div class="description">
          <p>Yeat another place for Formula 1 lovers</p>
        </div>
      </div>
      <div class="bottom-nav">
        <p>below something interesting</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingScreen"
};
</script>

<style lang="scss" scoped>
.home-page-landing-screen {
  position: relative;
  width: 100%;
  height: 100vh;

  .container {
    background: url("../../assets/images/homepage/curva-parabolica-retro.jpg");
    background-size: cover;

    position: absolute;
    // top: 60px;
    width: 100%;
    // height: calc(100vh - 60px);
    height: 100vh;
    // background: pink;
    // margin-top: 40px;
    display: flex;
    flex-direction: column;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: linear-gradient(
        rgba(133, 133, 133, 0.473),
        rgba(0, 0, 0, 0.584)
      );
    }

    .content {
      // border: 1px solid red;
      width: 100%;
      height: 65%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      z-index: 10;

      .title,
      .description {
        // border: 1px solid red;
        margin: 15px;
      }

      .title h1 {
        color: rgb(255, 111, 111);
        font-size: 6rem;
      }

      .description p {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }

  .bottom-nav {
    // border: 1px solid red;
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p {
      margin-bottom: 10px;
      color: rgb(255, 151, 168);
      font-weight: 500;
    }
  }
}

@media (max-width: 510px) {
  .home-page-landing-screen {
    .container {
      .content {
        .title h1 {
          font-size: 5rem;
        }
        .description p {
          font-size: 1.4rem;
          font-weight: 400;
        }
      }
    }
  }
}
</style>