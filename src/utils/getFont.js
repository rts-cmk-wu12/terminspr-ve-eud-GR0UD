import { Ubuntu, Roboto, Racing_Sans_One } from "next/font/google";

export const ubuntu = Ubuntu({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
  preload: true,
});

export const roboto = Roboto({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
});

export const racingSansOne = Racing_Sans_One({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-racing-sans-one",
  display: "swap",
  preload: true,
});

export const fontVariables = `${ubuntu.variable} ${roboto.variable} ${racingSansOne.variable}`;
