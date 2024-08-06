import { useState } from 'react';

function Header({ onSearch }) {
    const [search, setSearch] = useState('');
    return (
        <div className="p-4 bg-black flex items-center justify-between fixed top-0 right-0 left-0 z-30">
            <div className="flex items-center space-x-4">
                <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="text-white">
                        Home
                    </a>
                    <a href="#" className="text-white">
                        About
                    </a>
                    <a href="#" className="text-white">
                        Contact
                    </a>
                </nav>
            </div>
            <div className="flex space-x-4 items-center">
                <input
                    type="text"
                    className="p-2 text-black"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button className="bg-red-600 pr-2 pl-2 text-white rounded-md" onClick={() => onSearch(search)}>
                    Search
                </button>
            </div>
        </div>
    );
}

export default Header;
