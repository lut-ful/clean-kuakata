import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import About from "@/components/About";
import Crisis from "@/components/Crisis";
import EventDetails from "@/components/EventDetails";
import SponsorsDisplay from "@/components/SponsorsDisplay";
import Sponsors from "@/components/Sponsors";
import Volunteer from "@/components/Volunteer";
import RecentActivities from "@/components/RecentActivities";
import Media from "@/components/Media";
import SocialLinks from "@/components/SocialLinks";
import CoalsSection from "@/components/CoalsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* 1. Hero — full viewport, countdown, sponsor credits */}
        <Hero />

        {/* 2. Impact stats bar */}
        <Stats />

        {/* 3. Kuakata photo slideshow */}
        <PhotoSlideshow />

        {/* 4. About the event */}
        <About />

        {/* 5. The crisis — environmental data */}
        <Crisis />

        {/* 6. Event details — date, location, schedule */}
        <EventDetails />

        {/* 7. Confirmed sponsors — bold display */}
        <SponsorsDisplay />

        {/* 8. Sponsorship tiers — sell new sponsors */}
        <Sponsors />

        {/* 9. Volunteer registration */}
        <Volunteer />

        {/* 10. Blog, stories, gallery */}
        <RecentActivities />

        {/* 11. Press & media */}
        <Media />

        {/* 12. Social media links */}
        <SocialLinks />

        {/* 13. COALS Global Foundation — the organizer */}
        <CoalsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
