<template>
  <div class="">
    <section style="background: #ededed; padding-bottom: 100px">
      <mdb-edge-header color="indigo" />
      <mdb-container free-bird>
        <mdb-row>
          <mdb-col
            md="8"
            lg="7"
            class="mx-auto float-none white z-depth-5 py-2 px-2"
          >
            <mdb-card-body>
              <h2 class="h2-responsive">
                <strong>Top Movies</strong>
              </h2>
              <p class="pb-4">Ranking of twenty top-rated films.</p>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </section>
    <div class="list-container container-fluid">
        <div class="row" v-if="topRated && topRated.length > 1">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-col" v-for="(item, index) in topRated" :key="index">
                <MovieCard :item="item" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import MovieCard from '../Movie/MovieCard';
import tmdb from "../../apis/tmdb";

const apiKey = "3e47509c5e108f3c61f81a43fdd0bb7c";

import {
  mdbEdgeHeader,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCardBody
} from "mdbvue";
export default {
  name: "TopMovies",
  components: {
    mdbEdgeHeader,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCardBody,
    MovieCard
  },
  data() {
    return {
      topRated: [],
    };
  },
  methods: {
    getTopRatedMovies() {
      tmdb
        .get("/movie/top_rated", {
          params: {
            api_key: apiKey,
          },
        })
        .then((response) => {
          const result = response.data.results;
          this.topRated = result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getTopRatedMovies();
  },
};
</script>

<style lang="scss">
.card-col{
    margin-bottom: 15px;
}
</style>
