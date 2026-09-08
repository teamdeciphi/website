import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Deciphi",
    short_name: "Deciphi",
    description:
      "Qatar's leading cybersecurity provider — consulting, assessment, training, and managed security.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8B1A1A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
