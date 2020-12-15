<template>
  <div>
    <div class="container">
      <div class="year">
        <h1>{{yearData.year}}</h1>
      </div>
      <div class="team-year-card">
        <div class="team-year-card__top">
          <div class="drivers">
            <div class="drivers__driver-1 driver">
              <h2>{{yearData.driver_1.name}}</h2>
              <h2 class="driver_number">{{yearData.driver_1.number}}</h2>
            </div>
            <div class="drivers__driver-2 driver">
              <h2>{{yearData.driver_2.name}}</h2>
              <h2 class="driver_number">{{yearData.driver_2.number}}</h2>
            </div>
          </div>
          <div class="car">
            <h3>{{yearData.car}}</h3>
            <img
              :src="require('../../assets/images/cars/' + teamName + '/' + yearData.carImage)"
              alt
            />
            <!-- <img src="../../assets/images/cars/ferrari/SF-1000.jpg" alt /> -->
          </div>
        </div>
        <div class="team-year-card__bottom">
          <h3>{{yearData.constructorsCup}}</h3>
          <h4>{{yearData.year}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TeamYearCard",
  props: {
    yearData: {
      type: Object,
      required: true
    },
    teamName: {
      type: String
    }
  },
  computed: {
    ...mapGetters(["TEAM"])
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px silver;
  border-radius: 20px;

  .year {
    position: absolute;
    top: 2.5rem;
    left: -5rem;
    color: rgba(128, 128, 128, 0.507);
    transform: rotate(270deg);

    h1 {
      font-size: 3rem;
    }
  }

  .team-year-card {
    width: 100%;
    height: 100%;
    border-radius: 20px;

    &__top {
      height: 70%;
      border-bottom: 1px solid rgba(128, 128, 128, 0.3);

      .drivers {
        height: 50%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(128, 128, 128, 0.3);

        .driver {
          position: relative;
          width: 50%;
          color: rgba(128, 128, 128, 0.486);
          text-transform: uppercase;
          text-align: left;
          padding: 15px 15px;

          .driver_number {
            position: absolute;
            bottom: 0;
            right: 10px;
          }
        }

        &__driver-1 {
          // border-right: 1px solid pink;
          box-shadow: 0px 0px 4px silver;
          border-radius: 20px 0 0 0;
        }

        &__driver-2 {
        }
      }

      .car {
        position: relative;
        height: 50%;

        h3 {
          position: absolute;
          top: 0.5rem;
          right: 1rem;
          font-size: 1.8rem;
          color: rgba(128, 128, 128, 0.507);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

@media (max-width: 555px) {
  .container {
    position: relative;
    width: 480px;
    .year {
      position: absolute;
      top: -2.5rem;
      right: 1.5rem;
      color: rgba(128, 128, 128, 0.507);
      transform: rotate(0);

      h1 {
        text-align: right;
        font-size: 3rem;
      }
    }
  }
}
</style>