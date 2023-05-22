import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/hero";
import Container from "../components/container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Container>
        <Hero title="OTA KAWAI" subtitle="My Portfolio" imageOn />
      </Container>
    </>
  );
}
