/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ["fakeimg.pl", "localhost", ],
    },
    reactStrictMode: true,
    distDir: 'dist',
    output: 'export',
};

export default nextConfig;
