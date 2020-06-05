import HomePage from './components/Home/HomePage.vue';
import TopMovies from './components/Tops/TopMovies.vue';
import TopTvShows from './components/Tops/TopTvShows.vue';

export const routes = [
    { path: '', component: HomePage },
    {
        path: '/top-movies',
        component: TopMovies
    },
    {
        path: '/top-tvshows',
        component: TopTvShows
    }
];