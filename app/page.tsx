import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Service } from "./components/Service/Service";
import { Stack } from "./components/Stack/Stack";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Service />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
