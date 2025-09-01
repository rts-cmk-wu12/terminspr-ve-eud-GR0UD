import { fontVariables } from "@/utils/getFont";
import "@/styles/main.scss";

export const metadata = {
  title: {
    template: "%s | Landrup Dans",
    default: "Landrup Dans",
  },
  description: "Danskole for børn og unge",
};

export default function RootLayout({ children }) {
  return (
    <html lang='da' className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
