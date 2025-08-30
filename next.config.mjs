/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    ...(process.env.NODE_ENV === 'production' && {
        output: 'export',
        basePath: '/todo-list-next-js-15',
        assetPrefix: '/todo-list-next-js-15',
    }),
};

export default nextConfig;
