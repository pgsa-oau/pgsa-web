/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ["fakeimg.pl", "localhost", "images.unsplash.com"],
    },
    reactStrictMode: true,
    distDir: 'build',
    output: 'export',
};

export default nextConfig;
