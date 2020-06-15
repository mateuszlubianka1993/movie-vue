<template>
  <div class="detail-container">
    <div class="movie-bg-img animated fadeIn" :style="`background-image: url('https://image.tmdb.org/t/p/w780/${details.backdrop_path}');`">
        <div class="content container-fluid pb-2 pt-2 animated slideInUp">
            <div class="row">
                <div class="col-12 title-box">
                    <mdb-badge color="warning">TV Show</mdb-badge>
                    <p>{{details.name}}</p> 
                    <span class="small">
                        {{details.original_name}} ({{details.first_air_date}})
                    </span>
                </div>
                <div class="col-12 rating-box">
                   <mdb-icon icon="star" class="amber-text" /> {{details.vote_average}}/10 <span class="small"> Votes: {{details.vote_count}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="content container-fluid">
        <div class="row mt-3 border-bottom border-dark pb-3">
            <div class="col-5 animated slideInLeft">
                <img :src="'https://image.tmdb.org/t/p/w200/' + details.poster_path" class="img-fluid z-depth-3" alt="1" />
            </div>
            <div class="col-7 animated slideInRight">
                <p class="small text-left">{{details.overview}}</p>
            </div>
        </div>
        <div class="row text-left mt-2">
            <div class="col-12">
                <p>Genres: <span class="small" v-for="(genre, index) in details.genres" :key="index">{{genre.name}}, </span></p>
                <p>Seasons: <span class="small" v-if="details.seasons">{{details.seasons.length}}</span></p>
                <p>Countries: <span class="small" v-for="(country, index) in details.origin_country" :key="index" >{{country}}, </span></p>
                <p>Original title: <span class="small">{{details.original_name}}</span></p>
                <p>Spoken languages: <span class="small">{{details.original_language}}, </span></p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mdbBadge, mdbIcon } from 'mdbvue';
import tmdb from "../../apis/tmdb";

const apiKey = "3e47509c5e108f3c61f81a43fdd0bb7c";

export default {
  name: "TvDetails",
  data() {
    return {
      id: this.$route.params.id,
      details: {},
    };
  },
  methods: {
    getDetails() {
      tmdb
        .get(`/tv/${this.id}`, {
          params: {
            api_key: apiKey,
          },
        })
        .then((response) => {
          const result = response.data;
          this.details = result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getDetails();
  },
    components: {
      mdbBadge,
      mdbIcon
    }
};
</script>

<style lang="scss">
.detail-container {
  position: relative;

  .movie-bg-img {
    height: 21.5rem;
    width: 100%;
    position: relative;
    background-position-x: center;
    background-position-y: top;
    background-repeat: no-repeat;
    background-color: #000;
    background-size: cover;

    .content {
        position: absolute;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: 0.5);
        border-top: 1px solid white;
        color: white;
        text-align: left;
        .title-box p {
            font-size: 2rem;
            margin-bottom: 0;
        }
    }
  }

  .content {
      
  }
}
</style>
