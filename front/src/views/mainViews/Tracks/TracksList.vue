<template>
  <div class="track-list container">
    <TrackCard
      class="track-list-track-card"
      v-for="track in trackData"
      :key="track.title"
      :trackData="track"
    />
  </div>
</template>

<script>
import TrackCard from "@/components/TrackComponents/TrackCard";

export default {
  name: "TracksList",
  components: {
    TrackCard
  },
  data() {
    return {
      trackData: [
        {
          id: 1,
          section: "track",
          title: "Monza",
          country: "Italy",
          dateInfo: {
            firstRace: 1950,
            totalRaces: 70
          },
          techInfo: {
            length: 5777,
            significantElements: 8,
            mostKnownElement: "Curva Parabolica"
          }
        },
        {
          id: 2,
          section: "track",
          title: "Spa",
          country: "Belgium",
          dateInfo: {
            firstRace: 1951,
            totalRaces: 69
          },
          techInfo: {
            length: 5550,
            significantElements: 9,
            mostKnownElement: "Eau Rauge"
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;

  .track-list-track-card:first-child {
    margin-top: 65px;
  }
}
</style>