const key=import.meta.env.VITE_TMDB_KEY;
const baseUrl="https://api.themoviedb.org/3";

const endpoints={
    popular:`${baseUrl}/movie/popular?api_key=${key}&language=es-ES&page=1`,
    topRated:`${baseUrl}/movie/top_rated?api_key=${key}&language=es-ES&page=1`,
    upComing:`${baseUrl}/movie/upcoming?api_key=${key}&language=es-ES&page=1`,
    topRated2:`${baseUrl}/movie/top_rated?api_key=${key}&language=es-ES&page=2`,
    soon:`${baseUrl}/movie/upcoming?api_key=${key}&language=es-ES&page=2`,
};

export default endpoints;