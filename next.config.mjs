/** @type {import('next').NextConfig} */

// use .env
require('dotenv').config();

const nextConfig = {
    images: {
        domains: ["fakeimg.pl", "localhost", ],
    },
    reactStrictMode: true,
    distDir: 'dist',
    // output: 'export',
};

export default nextConfig;
