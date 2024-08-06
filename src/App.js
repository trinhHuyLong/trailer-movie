import { useState, useEffect } from 'react';
import Header from '~/components/Header';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import './index.css';
import MovieSearch from './components/MovieSearch';
function App() {
    const [movie, setMovie] = useState([]);
    const [movieTop, setMovieTop] = useState([]);
    const [movieSearch, setMovieSearch] = useState([]);

    async function handleSearch(searchValue) {
        setMovieSearch([]);
        try {
            const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                },
            };
            const searchMovie = await fetch(url, options);
            const data = await searchMovie.json();
            setMovieSearch(data.results);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(function () {
        const fetchMovie = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                },
            };
            const url1 =
                'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
            const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
            const [response1, response2] = await Promise.all([await fetch(url1, options), await fetch(url2, options)]);

            const data1 = await response1.json();
            setMovie(data1.results);

            const data2 = await response2.json();
            setMovieTop(data2.results);
        };
        fetchMovie();
    }, []);
    return (
        <div className="bg-black">
            <Header onSearch={handleSearch} />
            <Banner />
            {movieSearch.length > 0 ? (
                <MovieSearch title="Kết quả tìm kiếm" data={movieSearch} />
            ) : (
                <>
                    <MovieList title={'Phim Hot'} data={movie} />
                    <MovieList title={'Phim Đề Cử'} data={movieTop} />
                </>
            )}
        </div>
    );
}

export default App;
