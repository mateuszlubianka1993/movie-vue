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
                <strong>Search movies, tv shows and people.</strong>
              </h2>
              <p class="pb-4">Enter title or name to search.</p>
            <form>
              <mdb-input v-model="inputValue" label="Search..."/>
              <div class="text-xs-left">
                <mdb-btn color="primary" type="submit">Search</mdb-btn>
              </div>
            </form>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </section>
    <div class="list-container container-fluid">
        
    </div>
  </div>
</template>

<script>
// import TvCard from '../TV/TvCard';
// import tmdb from "../../apis/tmdb";

// const apiKey = "3e47509c5e108f3c61f81a43fdd0bb7c";

import {
  mdbEdgeHeader,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCardBody,
  mdbBtn,
  mdbInput
} from "mdbvue";
export default {
  name: "TopTvShows",
  components: {
    mdbEdgeHeader,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCardBody,
    mdbBtn,
    mdbInput
    // TvCard
  },
  data() {
    return {
      inputValue: '',
      topRated: [],
    };
  },
  methods: {
   
  },
  created() {
    // this.getTopRatedShows();
  },
};
</script>

<style lang="scss">
.card-col{
    margin-bottom: 15px;
}
</style>
