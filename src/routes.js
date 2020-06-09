import HomePage from './components/Home/HomePage.vue';
import TopMovies from './components/Tops/TopMovies.vue';
import TopTvShows from './components/Tops/TopTvShows.vue';
import Search from './components/Search/Search.vue';
import NowPlaying from './components/Movie/NowPlaying.vue';
import Upcoming from './components/Movie/Upcoming.vue';
import OnTv from './components/TV/OnTv.vue';

export const routes = [
    { path: '', component: HomePage },
    {
        path: '/top-movies',
        component: TopMovies
    },
    {
        path: '/top-tvshows',
        component: TopTvShows
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/now-playing',
        component: NowPlaying
    },
    {
        path: '/upcoming',
        component: Upcoming
    },
    {
        path: '/on-tv',
        component: OnTv
    }
];