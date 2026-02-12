import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite que o Next.js otimize imagens de domínios específicos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      
      // Exemplo para aceitar qualquer subdomínio de um site:
      // {
      //   protocol: 'https',
      //   hostname: '**.google.com',
      // },
    ],
  },
  /* Outras opções de configuração aqui */
};

export default nextConfig;