import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain HTML/CSS/JS in out/, so the site runs on GitHub Pages or any Iranian
  // shared host — neither can run a Node server.
  output: "export",

  // Every page becomes a folder with its own index.html (/fa/ -> /fa/index.html).
  // Static hosts serve those directly; without it they 404 on anything but /.
  trailingSlash: true,

  // next/image's optimiser needs a server. Static export has none, so images are
  // served as they are — which is why they get shipped already sized.
  images: { unoptimized: true },
};

export default nextConfig;
