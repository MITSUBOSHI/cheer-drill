import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" && process.env.E2E !== "true" ? "/cheer-drill" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
