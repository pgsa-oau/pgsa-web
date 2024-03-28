/** @type {import('next').NextConfig} */
// allow the use of imaes from https://fakeimg.pl

const nextConfig = {
    images: {
        domains: ["fakeimg.pl"],
    },
};

export default nextConfig;
