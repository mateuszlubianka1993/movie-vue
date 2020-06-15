<template>
  <!-- Footer -->
  <mdb-footer color="elegant-color" class="font-small pt-4 mt-4 z-depth-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="4">
          <h5 class="title">Credits</h5>
          <p>"This product uses the TMDb API but is not endorsed or certified by TMDb."</p>
        </mdb-col>
        <mdb-col sm="4">
          <h5 class="title">Movies</h5>
          <ul>
            <li class="list-unstyled"><router-link to="/top-movies" >Top Movies</router-link></li>
            <li class="list-unstyled"><router-link to="/now-playing" >Now Playing</router-link></li>
            <li class="list-unstyled"><router-link to="/upcoming" >Upcoming</router-link></li>
            <li class="list-unstyled"><router-link to="/search" >Search</router-link></li>
          </ul>
        </mdb-col>
        <mdb-col sm="4">
          <h5 class="title">Shows</h5>
          <ul>
            <li class="list-unstyled"><router-link to="/top-tvshows" >Top Tv Shows</router-link></li>
            <li class="list-unstyled"><router-link to="/on-tv" >On Tv</router-link></li>
            <li class="list-unstyled"><router-link to="/tv-today" >Airing Today</router-link></li>
            <li class="list-unstyled"><router-link to="/search" >Search</router-link></li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020: <a href="https://github.com/mateuszlubianka1993/movie-vue"> Movie Vue App </a>
      </mdb-container>
    </div>
  </mdb-footer>
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>
