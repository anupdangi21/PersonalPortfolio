import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-center py-6">
      <div className="mb-2">
        <p className="text-sm text-gray-700">Contact: +977 9840610410</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://www.instagram.com/ig_anupdangi" target="_blank" className="text-amber-600 hover:text-amber-700 transition hover:underline">Instagram</a>
          <a href="https://www.facebook.com/anup.dangi.716" target="_blank" className="text-amber-600 hover:text-amber-700 transition hover:underline">Facebook</a>
          <a href="https://www.linkedin.com/in/anup-dangi-407a03259/" target="_blank" className="text-amber-600 hover:text-amber-700 transition hover:underline">LinkedIn</a>
        </div>
      </div>
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Anup Dangi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;