import IconRating from '../assets/rating.png';
import IconRatingHalf from '../assets/rating-half.png';
import ImgTem from '../assets/temp-1.jpeg';
import IconPlay from '../assets/play-button.png';

function Banner() {
    return (
        <div className="relative w-full bg-banner h-[600px] bg-cover bg-center bg-no-repeat">
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <div className="p-4 w-full h-full flex items-center justify-center space-x-[30px] relative z-20 ">
                <div className="flex flex-col space-y-5 items-baseline w-[50%]">
                    <p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 text-md px-3">TV Show</p>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-white text-3xl text-[40px] font-bold">Nghe nói em thích tôi</h2>
                        <div className="flex items-center space-x-3">
                            <img src={IconRating} className="w-8 h-8" />
                            <img src={IconRating} className="w-8 h-8" />
                            <img src={IconRating} className="w-8 h-8" />
                            <img src={IconRating} className="w-8 h-8" />
                            <img src={IconRatingHalf} className="w-8 h-8" />
                        </div>
                        <p className="text-white text-justifye">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus dictum sem, quis
                            interdum lacus. Praesent laoreet quis justo hendrerit convallis. Donec suscipit eget sem ut
                            imperdiet. In eleifend leo sed arcu rhoncus imperdiet. Donec ut porttitor velit. Cras
                            maximus mollis quam, at volutpat nisi maximus et. In vestibulum erat in dictum pretium. Nam
                            egestas sed risus vitae finibus. Curabitur vel varius mauris.
                        </p>
                        <div className="flex items-center space-x-4">
                            <button className="p-3 text-white font-bold text-lg bg-black">Chi tiết</button>
                            <button className="p-3 text-white bg-red-500 font-bold text-lg">Xem phim</button>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] flex justify-center">
                    <div className="w-[300px] h-[400px] relative group cursor-pointer">
                        <img src={ImgTem} className="w-full h-full object-cover" />
                        <div className="w-full h-full absolute flex items-center justify-center top-0 left-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            <img src={IconPlay} className="w-16 h-16" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
