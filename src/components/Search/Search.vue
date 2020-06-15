<template>
  <div class="search">
    <section style=" padding-bottom: 100px" class="grey lighten-2">
      <mdb-edge-header color="indigo" class="search-header" />
      <mdb-container free-bird class="animated slideInUp">
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
            <form @submit.prevent="getSearched">
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
    <div class="list-container container-fluid pt-5">
      <div class="row" v-if="searched && searched.length > 1">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-col" v-for="(item, index) in searched" :key="index">
                <TvCard v-if="item.media_type === 'tv'" :item="item" class="animated slideInUp" />
                <MovieCard v-if="item.media_type === 'movie'" :item="item" class="animated slideInUp" />
                <PersonCard v-if="item.media_type === 'person'" :item="item" class="animated slideInUp" />
            </div>
        </div>    
    </div>
  </div>
</template>

<script>
import TvCard from '../TV/TvCard';
import MovieCard from '../Movie/MovieCard';
import PersonCard from '../Person/PersonCard';
import tmdb from "../../apis/tmdb";

const apiKey = "3e47509c5e108f3c61f81a43fdd0bb7c";

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
  name: "Search",
  components: {
    mdbEdgeHeader,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCardBody,
    mdbBtn,
    mdbInput,
    TvCard,
    PersonCard,
    MovieCard
  },
  data() {
    return {
      inputValue: '',
      searched: [],
    };
  },
  methods: {
   getSearched() {
      tmdb
        .get("/search/multi", {
          params: {
            api_key: apiKey,
            query: this.inputValue
          },
        })
        .then((response) => {
          const result = response.data.results;
          this.searched = result;
          this.inputValue = '';
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
.search {
  .search-header {
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
