import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [new URL('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg'),
            new URL('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg')],
    },
};

export default withNextIntl(nextConfig);
