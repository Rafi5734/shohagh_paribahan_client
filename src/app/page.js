// import styles from './page.module.css'
import CarouselsMain from "@/components/HeroSection/CarouselsMain";
import TicketReserveSection from "@/components/TicketReserveSection/TicketReserveSection";
import WhyShohaghParibahan from "@/components/WhyShohaghParibahan";
import Destinations from "@/components/Destinations";
import MainNavbar from "@/components/MainNavbar";

export default function Home() {
  return (
    <main className="mt-5 pt-3">
      {/* <MainNavbar /> */}
      <CarouselsMain></CarouselsMain>
      <TicketReserveSection></TicketReserveSection>
      <WhyShohaghParibahan></WhyShohaghParibahan>
      <Destinations></Destinations>
    </main>
  );
}
