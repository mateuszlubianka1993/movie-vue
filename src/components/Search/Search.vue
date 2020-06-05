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
    <div class="list-container container-fluid">
      <div class="row" v-if="searched && searched.length > 1">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-col" v-for="(item, index) in searched" :key="index">
                <TvCard v-if="item.media_type === 'tv'" :item="item" />
                <MovieCard v-if="item.media_type === 'movie'" :item="item" />
                <PersonCard v-if="item.media_type === 'person'" :item="item" />
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
  name: "TopTvShows",
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
          console.log(this.searched);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
.card-col{
    margin-bottom: 15px;
}
</style>
