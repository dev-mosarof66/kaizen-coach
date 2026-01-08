import "./globals.css";
import { TranslationProvider } from "../contexts/translation-context";
import LayoutContent from "../components/common/layout-content";

export const metadata = {
  title: "Takteeki AI",
  description: "Takteeki App for managing your tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <TranslationProvider>
          <LayoutContent>
            {children}
          </LayoutContent>
        </TranslationProvider>
      </body>
    </html>
  );
}
