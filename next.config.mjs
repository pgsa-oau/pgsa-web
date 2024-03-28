/** @type {import('next').NextConfig} */
// allow the use of imaes from https://fakeimg.pl

const nextConfig = {
    images: {
        // allow the use of images from my public folder
        domains: ["fakeimg.pl", "localhost", ],
    },
    reactStrictMode: true,
    distDir: 'dist',
    // output: 'export',
};

export default nextConfig;
