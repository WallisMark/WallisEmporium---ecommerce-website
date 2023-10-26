/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'], // Add 'unsplash.com' to the list of allowed domains
        // You can also include other domains if needed, separated by commas
        // domains: ['unsplash.com', 'example.com'],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig;
