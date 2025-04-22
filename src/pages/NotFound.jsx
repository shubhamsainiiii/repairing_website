import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Page Not Found</h2>
            <p className="text-gray-500 mb-6">
                The page you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/" className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 transition-all duration-300">
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Player } from '@lottiefiles/react-lottie-player';
// import animationData from '../assets/404-animation.json';

// const NotFound = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white text-center">
//             <Player
//                 autoplay
//                 loop
//                 src={animationData}
//                 style={{ height: '300px', width: '300px' }}
//             />
//             <h1 className="text-4xl font-bold text-gray-800 mt-4">Oops! Page not found</h1>
//             <p className="text-gray-500 mb-6 mt-2">
//                 The page you’re looking for might have been removed or is temporarily unavailable.
//             </p>
//             <Link to="/" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
//                 Go back to Home
//             </Link>
//         </div>
//     );
// };

// export default NotFound;
