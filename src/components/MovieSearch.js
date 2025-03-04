import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { useState } from 'react';

const customStyles = {
    overlay: {
        zIndex: 9999,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};

function MovieSearch({ title, data }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState('');

    const handleTrailer = async function (id) {
        // setTrailerKey('');
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                },
            };
            const movieKey = await fetch(url, options);
            const data = await movieKey.json();
            setTrailerKey(data.results[0].key);
            setModalIsOpen(true);
        } catch (error) {
            setModalIsOpen(false);
            console.log(error);
        }
    };
    return (
        <div className="text-white p-10 mb-10">
            <h2 className="uppercase text-xl mb-4">{title}</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {data.map(function (item) {
                    return (
                        <div
                            key={item.id}
                            className="w-[200px] h-[300px] relative group"
                            onClick={() => handleTrailer(item.id)}
                        >
                            <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full">
                                <img
                                    src={`${process.env.REACT_APP_IMG_URL}${item.poster_path}`}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute bottom-4 left-2">
                                    <p className="uppercase text-md">{item.title || item.original_title}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerKey} opts={opts} />;
            </Modal>
        </div>
    );
}

export default MovieSearch;
