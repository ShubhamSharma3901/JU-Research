import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import HomePageCards from "@/components/HomePageCards";
import Mission_Vission from "@/components/M&V";
import Messages from "@/components/Messages";
import NavBar from "@/components/NavBar";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />

      <Hero />
      <Overview />

      <HomePageCards />
      <Mission_Vission />
      <Messages />
    </>
  );
}
