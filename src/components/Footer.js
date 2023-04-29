import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray01 text-white p-2">
      <div className="container flex justify-between items-center m-auto">
        <div className="text-sm font-medium text-center">
          <p>&copy; 2023 Job Planet</p>
        </div>
        <div className="text-sm">
          <a href="/" className="mx-4 hover:text-green">Careers</a>
          <a href="/" className="mx-4 hover:text-green">Privacy Policy</a>
          <a href="/" className="mx-4 hover:text-green">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;