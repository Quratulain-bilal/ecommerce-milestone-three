/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com", // Pexels image domain
      "img.freepik.com", // Freepik image domain
      "avatars.githubusercontent.com", // GitHub avatars domain
      "lh3.googleusercontent.com", // Google user images domain
      "fakestoreapi.com", // Fake Store API domain
    ],
  },
};

module.exports = nextConfig;
