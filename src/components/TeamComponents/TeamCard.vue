<template>
  <div class="container">
    <div
      ref="teamCard"
      class="team-card"
      :style="{background: teamData.colors.mainColor}"
      @click="$router.push({name: 'TeamView', params: {teamname: teamData.teamname}})"
    >
      <div class="team-card__top">
        <h1>{{teamData.title}}</h1>
        <div class="image" ref="teamCardLogo">
          <img
            :src="require('../../assets/images/teams/' + teamData.teamname + '/' + teamData.logoImage)"
            alt
          />
        </div>
      </div>
      <div class="team-card__bottom">
        <div class="constructor-cups">Constructor Championship Cups {{teamData.constructorTitles}}</div>
        <div class="personal-cups">Driver Championship Cup {{teamData.personalTitles}}</div>
      </div>
    </div>
    <div class="expand-artificial-data" @click="showAdditionalData">more</div>
    <div class="team-card__expanded-block" v-show="isExpandedDataVisible">
      <p>{{teamData.country}}</p>
      <p>{{teamData.location}}</p>
      <p>additional data</p>
      <p>additional data</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  data() {
    return {
      isExpandedDataVisible: false
    };
  },
  props: {
    teamData: {
      type: Object,
      required: true
    }
  },
  methods: {
    // копипаста проверка !переписать эту шляпу
    showAdditionalData() {
      if (window.innerWidth > 650) {
        if (!this.isExpandedDataVisible) {
          this.isExpandedDataVisible = true;
          this.$refs.teamCard.style.width = 600 + "px";
          this.$refs.teamCard.style.height = 500 + "px";
          this.$refs.teamCardLogo.classList.add("add-data-expanded");
        } else {
          this.isExpandedDataVisible = false;
          this.$refs.teamCard.style.width = 350 + "px";
          this.$refs.teamCard.style.height = 400 + "px";
          this.$refs.teamCardLogo.classList.remove("add-data-expanded");
        }
      } else {
        {
          if (!this.isExpandedDataVisible) {
            this.isExpandedDataVisible = true;
            this.$refs.teamCard.style.width = 350 + "px";
            this.$refs.teamCard.style.height = 600 + "px";
            this.$refs.teamCardLogo.classList.add("add-data-expanded");
          } else {
            this.isExpandedDataVisible = false;
            this.$refs.teamCard.style.width = 350 + "px";
            this.$refs.teamCard.style.height = 400 + "px";
            this.$refs.teamCardLogo.classList.remove("add-data-expanded");
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  color: #fff;

  .expand-artificial-data {
    position: absolute;
    cursor: pointer;
    right: 45px;
    top: 35px;
    z-index: 1000;
    font-size: 1rem;

    &:hover {
      color: rgb(145, 145, 145);
    }
  }
  .team-card__expanded-block {
    position: absolute;
    top: 50px;
    right: 105px;

    p {
      padding: 15px;
    }
  }
}

.container .team-card {
  position: relative;
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  // background: rgb(255, 255, 99);
  box-shadow: 0px 0px 8px 0px silver;
  border-radius: 20px;
  margin: 25px;
  transition: all 200ms ease;
  cursor: pointer;
  border: 4px solid white;
  color: gray;

  &:hover {
    box-shadow: 0px 0px 8px 3px silver;
    // transform: scale(1.01);
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
      transition: transform 200ms ease-out;

      // border: 1px solid green;

      &.add-data-expanded {
        display: block;
        margin: 30px;
        padding-left: 55px;
        transform: translate(-130px, -70px) scale(1.2);

        // justify-content: flex-start;
        padding: 0px 15px;
      }

      img {
        // border: 1px solid red;

        height: 200px;
      }
    }
  }

  &__bottom {
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media (max-width: 700px) {
  .container {
    .team-card {
      width: 350px;
      &__top {
        .image {
          img {
            height: 150px;
          }
        }
      }
    }
  }
}
</style>