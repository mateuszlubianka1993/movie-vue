<template>
  <div class="home-page">
    <Header msg="Welcome to Vue.js Movie App" />
    HomePage
  </div>
</template>

<script>
import Header from '../Header/Header';
import tmdb from '../../apis/tmdb';

const apiKey = '3e47509c5e108f3c61f81a43fdd0bb7c';

export default {
  name: 'HomePage',
  data(){
    return {
      popularMovies: []
    }
  },
  components: {
    Header
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
