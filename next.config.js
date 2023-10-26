/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['images.unsplash.com'], // Add 'unsplash.com' to the list of allowed domains
    //     // You can also include other domains if needed, separated by commas
    //     // domains: ['unsplash.com', 'example.com'],
    // },

    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'images.unsplash.com',
    //         port: '', // Leave it empty
    //         pathname: '/*', // Use the wildcard to match any path
    //       },
    //     ],
    //   },

    images: {
        domains: ['images.unsplash.com', 'unsplash.com'], // Add 'unsplash.com' to allow Unsplash URLs
      },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig;
