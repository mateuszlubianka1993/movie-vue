<template>
  <div class="home-page">
    <Header msg="Welcome to Vue.js Movie App" />
    <section class="popular-movies mt-3">
      <h3 class="h3-responsive">Popular Movies</h3>
      <hr>
      <VueSlickCarousel v-bind="settings" v-if="popularMovies && popularMovies.length > 1">
        <MovieCard v-for="(item, index) in popularMovies" :key="index" :item="item" />
      </VueSlickCarousel>
    </section>
  </div>
</template>

<script>
import Header from '../Header/Header';
import MovieCard from '../Movie/MovieCard';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import tmdb from '../../apis/tmdb';

const apiKey = '3e47509c5e108f3c61f81a43fdd0bb7c';

export default {
  name: 'HomePage',
  data(){
    return {
      popularMovies: [],
      popularPeople: [],
      settings: {
          "centerMode": true,
          "centerPadding": "20px",
          "dots": true,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 4,
          "slidesToScroll": 1,
          "autoplay": true,
          "autoplaySpeed": 2500,
          "pauseOnDotsHover": true,
          "pauseOnFocus": true,
          "pauseOnHover": true,
          "initialSlide": 0,
          "responsive": [
            {
              "breakpoint": 1024,
              "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "infinite": true,
                "dots": true
              }
            },
            {
              "breakpoint": 600,
              "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 2,
                "initialSlide": 2
              }
            },
            {
              "breakpoint": 480,
              "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            }
          ]
        }
    }
  },
  components: {
    Header,
    VueSlickCarousel,
    MovieCard
  },
  methods: {
    getPopularMovies() {
      tmdb.get('/movie/popular', {
        params: {
          api_key: apiKey
        }
      })
      .then(response => {
        const result = response.data.results;
        this.popularMovies = result;
      })
      .catch(error => {
        console.log(error);
      })
    },
    getPopularPeople() {
      tmdb.get('/person/popular', {
        params: {
          api_key: apiKey
        }
      })
      .then(response => {
        const result = response.data.results;
        this.popularPeople = result;
        console.log(this.popularPeople)
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  created() {
    this.getPopularMovies();
    this.getPopularPeople();
  }
}
</script>

<style scoped lang="scss">
.home-page {
  max-width: 100%;
  overflow: hidden;
}

</style>
