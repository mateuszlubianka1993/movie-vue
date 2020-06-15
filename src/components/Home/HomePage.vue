<template>
  <div class="home-page">
    <Header msg="Welcome to Vue.js Movie App" />
    <section class="popular-movies mt-3" v-animateOnScroll="{animation: 'fadeInLeft'}">
      <h3 class="h3-responsive">Popular Movies</h3>
      <hr />
      <VueSlickCarousel
        v-bind="settings"
        v-if="popularMovies && popularMovies.length > 1"
      >
        <MovieCard
          v-for="(item, index) in popularMovies"
          :key="index"
          :item="item"
        />
      </VueSlickCarousel>
    </section>
    <section class="popular-people mt-5" v-animateOnScroll="{animation: 'fadeInLeft'}">
      <h3 class="h3-responsive">Popular People</h3>
      <hr />
      <VueSlickCarousel
        v-bind="settings"
        v-if="popularPeople && popularPeople.length > 1"
      >
        <PersonCard
          v-for="(item, index) in popularPeople"
          :key="index"
          :item="item"
        />
      </VueSlickCarousel>
    </section>
    <section class="popular-tv mt-5" v-animateOnScroll="{animation: 'fadeInLeft'}">
      <h3 class="h3-responsive">Popular TV Shows</h3>
      <hr />
      <VueSlickCarousel
        v-bind="settings"
        v-if="popularTvShows && popularTvShows.length > 1"
      >
        <TvCard
          v-for="(item, index) in popularTvShows"
          :key="index"
          :item="item"
        />
      </VueSlickCarousel>
    </section>
  </div>
</template>

<script>
import Header from '../Header/Header';
import MovieCard from '../Movie/MovieCard';
import PersonCard from '../Person/PersonCard';
import TvCard from '../TV/TvCard';
import { animateOnScroll } from 'mdbvue';
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
      popularTvShows: [],
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
    MovieCard,
    PersonCard,
    TvCard
  },
  directives: {
    animateOnScroll
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
      })
      .catch(error => {
        console.log(error);
      })
    },
    getPopularTvShows() {
      tmdb.get('/tv/popular', {
        params: {
          api_key: apiKey
        }
      })
      .then(response => {
        const result = response.data.results;
        this.popularTvShows = result;
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  created() {
    this.getPopularMovies();
    this.getPopularPeople();
    this.getPopularTvShows();
  }
}
</script>

<style scoped lang="scss">
.home-page {
  max-width: 100%;
  overflow: hidden;
  padding-bottom: 50px;
}
</style>
