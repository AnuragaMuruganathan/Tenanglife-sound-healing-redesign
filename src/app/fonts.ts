import localFont from "next/font/local";
import { Crimson_Pro, Imbue } from "next/font/google";

// Closest match to the condensed, high-contrast serif in the TenangLife logo.
export const imbue = Imbue({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-imbue",
  display: "swap",
});

// Book serif used for the hero copy, buttons and badge in the approved hero design.
export const crimson = Crimson_Pro({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
  display: "swap",
});

// TT Chocolates, the body face of the original site.
export const ttChocolates = localFont({
  src: [
    { path: "../fonts/tt-chocolates-trl-regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/tt-chocolates-medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/tt-chocolates-medium-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/tt-chocolates-trl-demibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-tt",
  display: "swap",
});
