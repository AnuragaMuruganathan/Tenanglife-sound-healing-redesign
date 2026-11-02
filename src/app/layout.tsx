import type { Metadata, Viewport } from "next";
import { crimson, imbue, ttChocolates } from "./fonts";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tenanglife.com"),
  title: "Sound Healing Therapy in Ubud, Bali | TenangLife",
  description:
    "Sound healing with singing bowls, gongs, drums and flutes in Ubud, Bali. Sounditation, Soundchronized Therapy, Soundpuncture, workshops, home service and retreats.",
  openGraph: {
    title: "Sound Healing Therapy | TenangLife",
    description: "Sound is the medicine of the future. Private and group sessions in Ubud, Bali.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fef6ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${imbue.variable} ${ttChocolates.variable} ${crimson.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
