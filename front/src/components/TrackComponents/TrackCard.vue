<template>
  <div class="container">
    <div class="track-card">
      <div class="track-card__top">
        <h1>{{trackData.title}}</h1>
        <h2>{{trackData.country}}</h2>
        <div class="image">
          <p>image</p>
          <!-- <img
            :src="require('../../assets/images/teams/' + teamData.teamname + '/' + teamData.logoImage)"
            alt
          />-->
        </div>
      </div>
      <div class="track-card__bottom">
        <div class="first-race">{{trackData.dateInfo.firstRace}}</div>
        <div class="track-length">{{trackData.techInfo.length}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    trackData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.container .track-card {
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 184);
  box-shadow: 0px 0px 8px 0px silver;
  border-radius: 20px;
  margin: 25px;
  transition: all 400ms ease;
  cursor: pointer;
  border: 4px solid white;
  color: gray;

  &:hover {
    box-shadow: 0px 0px 8px 3px silver;
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.98);
  }

  // Change h1 style by container hover!
  // &:hover .team-card-top h1 {
  //   color: white;
  // }

  &__top {
    position: relative;
    height: 65%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.466);
    h1 {
      // position: absolute;
      // top: 15px;
      // right: 15px;
      // text-align: left;
      // text-transform: uppercase;
      // color: rgba(172, 172, 172, 0.2);

      position: absolute;
      top: 4rem;
      left: -6rem;
      color: rgba(128, 128, 128, 0.507);
      text-transform: uppercase;
      transform: rotate(270deg);
      color: rgba(172, 172, 172, 0.2);
    }

    .image {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      // border: 1px solid green;

      img {
        // border: 1px solid red;

        height: 150px;
      }
    }
  }
}
</style>