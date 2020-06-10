import HomePage from './components/Home/HomePage.vue';
import TopMovies from './components/Tops/TopMovies.vue';
import TopTvShows from './components/Tops/TopTvShows.vue';
import Search from './components/Search/Search.vue';
import NowPlaying from './components/Movie/NowPlaying.vue';
import Upcoming from './components/Movie/Upcoming.vue';
import OnTv from './components/TV/OnTv.vue';
import AiringToday from './components/TV/AiringToday.vue';
import MovieDetails from './components/Movie/MovieDetails';
import TvDetails from './components/TV/TvDetails.vue';
import PersonDetails from './components/Person/PersonDetails.vue';

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
    },
    {
        path: '/tv-today',
        component: AiringToday
    },
    {
        path: '/movie/:id',
        component: MovieDetails,
        name: 'movie-details',
        params: true
    },
    {
        path: '/tv/:id',
        component: TvDetails,
        name: 'tv-details',
        params: true
    },
    {
        path: '/person/:id',
        component: PersonDetails,
        name: 'person-details',
        params: true
    }
];