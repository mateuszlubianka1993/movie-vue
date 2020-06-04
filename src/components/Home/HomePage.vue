<template>
  <div class="home-page">
    <Header msg="Welcome to Vue.js Movie App" />
    HomePage
    <VueSlickCarousel v-bind="settings">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import Header from '../Header/Header';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import tmdb from '../../apis/tmdb';

const apiKey = '3e47509c5e108f3c61f81a43fdd0bb7c';

export default {
  name: 'HomePage',
  data(){
    return {
      popularMovies: [],
      settings: {
          "centerMode": true,
          "centerPadding": "20px",
          "dots": true,
          "infinite": false,
          "speed": 500,
          "slidesToShow": 4,
          "slidesToScroll": 4,
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
    VueSlickCarousel
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
        console.log(this.popularMovies)
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  created() {
    this.getPopularMovies();
  }
}
</script>

<style scoped lang="scss">

</style>
