import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray01 text-white p-2">
        <nav className="flex items-center justify-between py-4">
            <div className="ml-4">
                <a href="/" className="font-bold text-2xl text-black-100">Job Planet</a>
            </div>
            <ul className="flex items-center">
                <li className="ml-6"><a href="/" className="text-lg font-medium text-gray03 hover:text-green">Home</a></li>
                <li className="ml-6"><a href="/" className="text-lg font-medium text-gray03 hover:text-green">About</a></li>
                <li className="ml-6"><a href="/" className="text-lg font-medium text-gray03 hover:text-green">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;