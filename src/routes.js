import HomePage from './components/Home/HomePage.vue';
import TopMovies from './components/Tops/TopMovies.vue';

export const routes = [
    { path: '', component: HomePage },
    {
        path: '/top-movies',
        component: TopMovies
    }
];