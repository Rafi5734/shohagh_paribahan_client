// import styles from './page.module.css'
"use client";
import HeroNavbar from "@/components/HeroNavbar/HeroNavbar";
import CarouselsMain from "@/components/HeroSection/CarouselsMain";
import TicketReserveSection from "@/components/TicketReserveSection/TicketReserveSection";
import WhyShohaghParibahan from "@/components/WhyShohaghParibahan";
import Destinations from "@/components/Destinations";

export default function Home() {
  return (
    <main>
      <HeroNavbar></HeroNavbar>
      <CarouselsMain></CarouselsMain>
      <TicketReserveSection></TicketReserveSection>
      <WhyShohaghParibahan></WhyShohaghParibahan>
      <Destinations></Destinations>
    </main>
  );
}
