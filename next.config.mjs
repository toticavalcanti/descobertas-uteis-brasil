/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // endereço antigo da página do ferro
      { source: "/produtos/ferro-a-vapor-aj-120", destination: "/descobertas/ferro-portatil-aj-120", permanent: true },
      { source: "/produtos", destination: "/#descobertas", permanent: false },
      { source: "/descobertas", destination: "/#descobertas", permanent: false },
    ];
  },
};
export default nextConfig;
