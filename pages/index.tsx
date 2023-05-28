import { Inter } from "next/font/google";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Container from "../components/container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Container>
        <Hero title="OTA KAWAI" subtitle="My Portfolio" imageOn />
        <Contact styles={{ marginBottom: "30px" }} />
      </Container>
    </>
  );
}
