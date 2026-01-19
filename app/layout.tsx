import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#0A192F] text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-4 sm:pt-6 md:pt-8 lg:pt-12 xl:pt-16 2xl:pt-20">
          <Container>
            {children}
          </Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}