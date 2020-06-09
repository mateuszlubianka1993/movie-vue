<template>
  <mdb-navbar expand="large" dark color="indigo" class="fixed-top">
    <mdb-navbar-brand href="#">
      Movie Vue
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <router-link to="/" ><mdb-nav-item active>Home</mdb-nav-item></router-link>
         <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Rankings</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item><router-link to="/top-movies" >Top Movies</router-link></mdb-dropdown-item>
            <mdb-dropdown-item><router-link to="/top-tvshows" >Top Tv Shows</router-link></mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Movies</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item><router-link to="/now-playing" >Now Playing</router-link></mdb-dropdown-item>
            <mdb-dropdown-item><router-link to="/upcoming" >Upcoming</router-link></mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Tv Shows</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item><router-link to="/on-tv" >On Tv</router-link></mdb-dropdown-item>
            <mdb-dropdown-item><router-link to="/tv-today" >Airing Today</router-link></mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <router-link to="/search" ><mdb-nav-item active>Search</mdb-nav-item></router-link>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
  export default {
    name: 'Navigation',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownMenu,
      mdbDropdownItem
    }
  }
</script>