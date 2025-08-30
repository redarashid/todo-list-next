'use client'

import Link from 'next/link';
import { LuDog } from 'react-icons/lu';

export default function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <div className="text-center">
        <LuDog className="text-9xl mx-auto text-orange-500 mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 mb-4">404</h1>
        <p className="md:text-xl mb-6 md:mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-400 transition-all duration-300" href="/" passHref>
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
