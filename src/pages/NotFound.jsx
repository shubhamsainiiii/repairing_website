import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/Not_Found_image.jpg';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
            <img
                src={NotFoundImage}
                alt="404 Not Found"
                className="w-[400px] max-w-full mb-6"
                loading="lazy"
            />
            <p className="text-gray-800 mb-6">
                The Page you are looking for doesn’t exist or has been removed.
            </p>
            <Link
                to="/"
                className="bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition-all duration-500"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
