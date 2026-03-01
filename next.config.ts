import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        scrollRestoration: false,
    },
    output: "standalone",
};

export default nextConfig;
