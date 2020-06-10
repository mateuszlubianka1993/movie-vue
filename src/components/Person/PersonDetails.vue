<template>
  <div class="detail-container">
    <div class="movie-bg-img" :style="`background-image: url('https://image.tmdb.org/t/p/h632/${details.profile_path}');`">
        <div class="content container-fluid pb-2 pt-2">
            <div class="row">
                <div class="col-12 title-box">
                    <mdb-badge color="warning">Person</mdb-badge>
                    <p>{{details.name}}</p> 
                    <span class="small">
                        {{details.name}} ({{details.birthday}})
                    </span>
                </div>
                <div class="col-12 rating-box">
                   <mdb-icon icon="star" class="amber-text" /> {{details.known_for_department}}
                </div>
            </div>
        </div>
    </div>
    <div class="content container-fluid">
        <div class="row mt-3 border-bottom border-dark pb-3">
            <div class="col-5">
                <img :src="'https://image.tmdb.org/t/p/w200/' + details.profile_path" class="img-fluid z-depth-3" alt="1" />
            </div>
            <div class="col-7">
                <p class="small text-left">{{details.biography}}</p>
            </div>
        </div>
        <div class="row text-left mt-2">
            <div class="col-12">
                <p>Place of birth: <span class="small" v-if="details.place_of_birth">{{details.place_of_birth}}, </span></p>
                <p>Popularity: <span class="small" >{{details.popularity}} </span></p>
                <p>Birthday: <span class="small">{{details.birthday}}</span></p>
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
        .get(`/person/${this.id}`, {
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
