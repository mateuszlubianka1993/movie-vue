<template>
  <div class="on-tv">
    <section style=" padding-bottom: 100px" class="grey lighten-2">
      <mdb-edge-header color="indigo" class="ontv-header" />
      <mdb-container free-bird class="animated slideInUp">
        <mdb-row>
          <mdb-col
            md="8"
            lg="7"
            class="mx-auto float-none white z-depth-5 py-2 px-2"
          >
            <mdb-card-body>
              <h2 class="h2-responsive">
                <strong>On Tv</strong>
              </h2>
              <p class="pb-4">List of shows that are currently on the air.</p>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </section>
    <div class="list-container container-fluid pt-5">
        <div class="row" v-if="shows && shows.length > 1">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-col" v-for="(item, index) in shows" :key="index">
                <TvCard :item="item" v-animateOnScroll="{animation: 'fadeInLeft'}" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TvCard from '../TV/TvCard';
import tmdb from "../../apis/tmdb";

const apiKey = "3e47509c5e108f3c61f81a43fdd0bb7c";

import {
  mdbEdgeHeader,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCardBody,
  animateOnScroll
} from "mdbvue";
export default {
  name: "OnTv",
  components: {
    mdbEdgeHeader,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCardBody,
    TvCard
  },
  directives: {
    animateOnScroll
  },
  data() {
    return {
      shows: [],
    };
  },
  methods: {
    getOnAir() {
      tmdb
        .get("/tv/on_the_air", {
          params: {
            api_key: apiKey,
          },
        })
        .then((response) => {
          const result = response.data.results;
          this.shows = result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getOnAir();
  },
};
</script>

<style lang="scss">
.on-tv {
  .ontv-header {
    // Zdjęcie autorstwa rovenimages.com z Pexels
    background-image: url('../../assets/top-bg-2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .card-col{
    margin-bottom: 15px;
}
}
</style>
